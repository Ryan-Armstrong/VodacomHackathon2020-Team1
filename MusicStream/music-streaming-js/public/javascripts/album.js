var playing;
var width = 1;
var duration;
var timer = 0;
var myVar;
var min = 0;
var sec = 0;

function togglePlaying() {
  var audioPlayer = document.getElementById("audio-player");
  duration = audioPlayer.duration;
  console.log('duration', audioPlayer.duration);
  console.log("currentTime", audioPlayer.currentTime);
  console.log("AUDIOPLAYER", audioPlayer);

  if (playing) {
    audioPlayer.pause();
    playing = false;
    clearInterval(myVar);
    document.getElementById("toggleBtn").src = "/icons/play_filled.svg";
  } else {
    audioPlayer.play();
    document.getElementById("toggleBtn").src = "/icons/pause_filled.svg";
    playing = true;
    clearInterval(myVar);
    myVar = setInterval(myTimer, 1000);
  }
}

function updateBar() {
  var element = document.getElementById("myprogressBar");

  if (timer <= duration) {
    element.style.width = (timer + 0.25) / duration * 100 + '%';
  }
}

function myTimer() {

  if (playing === true) {
    if (sec < 59) {
      sec++;
    } else {
      min++;
      sec = 0;
    }
    timer++;

    secString = addZero(sec);
    minString = addZero(min);
    document.getElementById('currentTime').innerHTML = minString + ":" + secString;
  }
}

function addZero(value) {
  if (value === 0) {
    return "00";
  }

  if (value < 10) {
    value = "0" + value;
  }

  return value;
}