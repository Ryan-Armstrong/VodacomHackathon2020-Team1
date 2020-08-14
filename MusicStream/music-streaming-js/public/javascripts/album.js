var playing = false;
var width = 1;
var duration;
var timer = 0;
var myVar;
var min = 0;
var sec = 0;
var shuffle = true;
var currentPlaying = undefined;

var album = [{
  id: 1,
  name: 'Sober',
  fav: false,
  playing: false
}, {
  id: 2,
  name: 'Obsessed',
  fav: false,
  playing: false
}, {
  id: 3,
  name: 'How could you',
  fav: true,
  playing: false
}, {
  id: 4,
  name: 'Sweet wine',
  fav: false,
  playing: false
}, {
  id: 5,
  name: 'Love Everything',
  fav: false,
  playing: false
}, {
  id: 6,
  name: 'Church bells',
  fav: false,
  playing: false
}, {
  id: 7,
  name: 'Love',
  fav: false,
  playing: false
}, {
  id: 8,
  name: 'Passion',
  fav: false,
  playing: false
}];


function togglePlaying() {
  let newArray = album;
  var audioPlayer = document.getElementById("audio-player");
  duration = audioPlayer.duration;
  document.getElementById("durationTime").innerHTML = "02:26";
  if (playing) {
    audioPlayer.pause();
    playing = false;
    clearInterval(myVar);
    document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
  } else {
    if (currentPlaying === undefined) {
      newArray[0] = {
        ...newArray[0],
        playing: true
      }
      album = newArray;
      currentPlaying = album[0];
      document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/pause_filled.svg";
    }

    audioPlayer.play();
    document.getElementById("toggleBtn").src = "/assets/icons/pause_filled.svg";
    playing = true;
    clearInterval(myVar);
    myVar = setInterval(myTimer, 1000);
  }
}

function playSelectedSong(id) {
  togglePlaying();
  document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/play_filled.svg";
  currentPlaying = album[id];
  document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/pause_filled.svg";
  let newArray = album;
  newArray[id] = {
    ...newArray[id],
    playing: true
  }
  album = newArray;

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

function favouriteClicked(id) {
  var modal = document.getElementById("myModal");
  let newArray = album;
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.display = "none"
  }, 1000)

  if (album[id].fav) {
    newArray[id] = {
      ...newArray[id],
      fav: false
    }
    album = newArray;
    document.getElementById(`fav-${id}`).src = "/assets/icons/favourite.svg"
    document.getElementById(`popUpMessage`).innerHTML = album[id].name + ' was removed from favourites'
  } else {
    newArray[id] = {
      ...newArray[id],
      fav: true
    }
    album = newArray;
    document.getElementById(`fav-${id}`).src = "/assets/icons/favourite_filled.svg"
    document.getElementById(`popUpMessage`).innerHTML = album[id].name + ' was added to favourites'
  }
}

function shuffleClicked() {
  console.log("I GOT TRIGGERED")

  if (shuffle === true) {
    shuffle = false;
    document.getElementById(`shuffleBtn`).src = "/assets/icons/shuffle_off.svg"
  } else {
    shuffle = true;
    document.getElementById(`shuffleBtn`).src = "/assets/icons/shuffle.svg"
  }

}

function openDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}