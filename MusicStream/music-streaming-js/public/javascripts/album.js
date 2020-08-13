var playing;

function togglePlaying() {
  var audioPlayer = document.getElementById("audio-player");

  console.log("AUDIOPLAYER", audioPlayer);

  if (playing) {
    audioPlayer.pause();
    playing = false;
    document.getElementById("toggleBtn").src = "/icons/play_filled.svg";
  } else {
    audioPlayer.play();
    document.getElementById("toggleBtn").src = "/icons/pause_filled.svg";
    playing = true;
  }
}
