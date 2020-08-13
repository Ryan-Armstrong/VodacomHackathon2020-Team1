const peer = {};
var peerIds = [];
const socket = io.connect(window.location.origin);

window.onunload = window.onbeforeunload = () => {
  socket.close();
};

socket.on("peeranswer", (id, description) => {
  peer[id].setRemoteDescription(description);
});

socket.on("peerview", id => {
  const peerConnection = new RTCPeerConnection({ iceServers: [ { urls: ["stun:stun.l.google.com:19302"] } ] });
  peer[id] = peerConnection;
  var videoElement = document.querySelector("video");
  let stream = videoElement.srcObject;
  stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
  peerConnection.onicecandidate = event => {
    if (event.candidate) {
      console.log("Peer New Candidate ", id);
      socket.emit("candidate", id, event.candidate);
    }
  };
  peerConnection
    .createOffer()
    .then(localDesc => peerConnection.setLocalDescription(localDesc))
    .then(() => {
      console.log("New Offer ", id, peerConnection.localDescription);
      socket.emit("offerid", id, peerConnection.localDescription);
    });
});

socket.on("disconnectPeer", id => {
  console.log("Socket Peer disconnected event. Peer id ",id);
  peer[id].close();
  delete peer[id];
});

socket.on("candidate", (id, candidate) => {
  console.log("Socket new candidate", id);
  peer[id].addIceCandidate(new RTCIceCandidate(candidate));
});

socket.on("message", (fromUser, text) => {
  console.log(fromUser, text);
  var labelEl = document.getElementById('receivedMessages');
  labelEl.innerHTML += "<b>" + fromUser + " : </b>" + text + "<br/>";
  // TODO: Add this to some div so that you can see the messages
});


function sendMessagetoViewers(type) {
  var message = document.getElementById('userMessage').value;
  socket.emit("messageall", message, type);
  document.getElementById('userMessage').value = '';
}

// Initialize
getStream().then(gotDevices); //Get stream immediately, then poppulate the possible audo and video streams

function gotDevices() {
  navigator.mediaDevices.enumerateDevices().then(devices => {
    console.log(devices);
    var videoSelect = document.querySelector("#videoSource");
    var audioSelect = document.querySelector("#audioSource");
    for (const device of devices) {
      const option = document.createElement("option");
      option.value = device.deviceId;
      if (device.kind === "audioinput") {
        console.log(device.label);
        option.text = device.label;
        audioSelect.appendChild(option);
      } else if (device.kind === "videoinput") {
        console.log(device.label);
        option.text = device.label;
        videoSelect.appendChild(option);
      }
    }
  });  
}

function getStream() {
  console.log("GET STREAM");
  if (window.stream) {
    window.stream.getTracks().forEach(track => {
      track.stop();
    });
  }

  var videoSelect = document.querySelector("#videoSource");
  var audioSelect = document.querySelector("#audioSource");
  const audioSelected = audioSelect.value;
  const videoSelected = videoSelect.value;
  console.log("Audio and Video", audioSelected,videoSelected);
  const constraints = {
    audio: { deviceId: audioSelected ? { exact: audioSelected } : undefined },
    video: { deviceId: videoSelected ? { exact: videoSelected } : undefined }
  };
  return navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
}

function gotStream(stream) {
  window.stream = stream;
  var videoSelect = document.querySelector("#videoSource");
  var audioSelect = document.querySelector("#audioSource");
  audioSelect.selectedIndex = [...audioSelect.options].findIndex(
    option => option.text === stream.getAudioTracks()[0].label
  );
  videoSelect.selectedIndex = [...videoSelect.options].findIndex(
    option => option.text === stream.getVideoTracks()[0].label
  );
  var videoElement = document.querySelector("video");
  videoElement.srcObject = stream;
  socket.emit("broadcaster");
}

function handleError(error) {
  console.error("Something went wrong: ", error);
}