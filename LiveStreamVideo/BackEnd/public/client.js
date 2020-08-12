let peerConnection;
const socket = io.connect(window.location.origin);
let myId = 0;
let hardcodedUsers = [
  {
    fromUser : 'Vishanka',
    icon : 'user1.png'
  },
  {
    fromUser : 'NatalyJJ',
    icon : 'user2.png'
  },
  {
    fromUser : 'Vuyo_92',
    icon : 'user3.png'
  }
]
//let fromUser = "130nk3r5";
let counter = 0;

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

socket.on("messageviewer", (text) => {
  console.log("BROADCASTER " + text);
  addMessageToHistory("The Space", "user1.png", text);
  //socket.to(broadcaster).emit('message', fromUser, text);
} )

function enableAudio() {
  console.log("Enabling audio");
  var video = document.querySelector("video");
  video.muted = !video.muted;
}

// Did receive message from Mini Program.
if (typeof(my) !== 'undefined') {
  my.onMessage = function(e) {
    console.log(e); // {'sendToWebView': '1'}
    document.getElementById('Message').innerHTML = "Width: " + e.width + " Height: " + e.height;
    var video = document.querySelector("video");
    video.height = e.height;
    var viewportWidth = e.width;
    var halfViewPortWidth = viewportWidth/2;
    var widthEntireVid = e.height * 1.77766;
    var halfEntireWidth = widthEntireVid / 2;
    var marginLeft = halfEntireWidth - halfViewPortWidth;
    var marginLeftVlaue = -1 * marginLeft;
    var video = document.getElementById("videoDiv");
    video.style.marginLeft = marginLeftVlaue + "px";
    my.postMessage({ offset : video.style.marginLeft });
  }
}

function randomiseUser()
{
  var fromUser = hardcodedUsers[counter];
  counter++;
  if (counter > 2)
  {
    counter = 0;
  }
  return fromUser;
}

function sendMessage()
{
  var fromUserDetails = randomiseUser();
  var chatElement = document.getElementById('chatInput');
  var text = chatElement.value;
  console.log(text);
  socket.emit("message", fromUserDetails.fromUser, text );
  addMessageToHistory(fromUserDetails.fromUser, fromUserDetails.icon, text);
  chatElement.value = "";
  
}

function addMessageToHistory(fromUser, icon, message)
{
  var domEl = stringToHTML("<img class='chat-useravatar' src='"+ icon +"'><div class='message-container'><b class='chat-username'>"+ fromUser + "</b><div class='chat-historymessage'>"+ message +"</div></div>")
  var historyDiv = document.getElementById('chatHistory');
  historyDiv.appendChild(domEl);  
  var historyDivContainer = document.getElementById('chatHistoryContainer');
  historyDivContainer.scrollTop = historyDivContainer.scrollHeight;
}


/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
var stringToHTML = function (str) {

	// If DOMParser is supported, use it
	if (support) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(str, 'text/html');
		return doc.body;
	}

	// Otherwise, fallback to old-school method
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;

};


var support = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch(err) {
		return false;
	}
	return true;
})();