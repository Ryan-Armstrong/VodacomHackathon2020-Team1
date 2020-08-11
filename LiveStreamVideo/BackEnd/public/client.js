let peerConnection;
const socket = io.connect(window.location.origin);

window.onunload = window.onbeforeunload = () => {
  socket.close();
};

socket.on("offerid", (id, description) => {
  peer = new RTCPeerConnection({ iceServers: [ { urls: ["stun:stun.l.google.com:19302"] }] });
  peerAnswer(peer, id, description);
  registerForStream(peer);
  registerNewCandidate(peer, id);  
});

function peerAnswer(peer, id, description)
{
  // Answer call from caster
  peer.setRemoteDescription(description)
  .then(() => peer.createAnswer())
  .then(localDescription => peer.setLocalDescription(localDescription))
  .then(() => {
    socket.emit("peeranswer", id, peer.localDescription);
  });
}

function registerForStream(peer)
{
  // get stream when caster puts stream on peer connection
  peer.ontrack = event => {
    var video = document.querySelector("video");
    video.srcObject = event.streams[0];
  };
}

function registerNewCandidate(peer, id)
{
  // Inform caster that a new candidate has been added so that a new peer connection can be created.
  peer.onicecandidate = event => {
    if (event.candidate) {
      socket.emit("candidate", id, event.candidate);
    }
  };
}

socket.on("candidate", (id, candidate) => {
  console.log("Socket new candidate", id);
  peer.addIceCandidate(new RTCIceCandidate(candidate)).catch(e => console.error(e));
});

socket.on("connect", () => {
  socket.emit("peerview"); // Get latest stream from caster
});

socket.on("broadcaster", () => {
  socket.emit("peerview"); // Get latest stream from caster
});

socket.on("disconnectPeer", () => {
  peer.close();
});

function enableAudio() {
  console.log("Enabling audio");
  var video = document.querySelector("video");
  video.muted = !video.muted;
}