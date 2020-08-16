var playing = false;
var width = 0;
var duration = undefined;
var timer = 0;
var myVar;
var min = 0;
var sec = 0;
var shuffle = true;
var currentPlaying = undefined;
var repeat = false;
var imageSet = false;
var selectedSong = undefined;

var songs = [{
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

var album = [{
    id: 4,
    title: "After Hours",
    releaseDate: "03/03/2020",
    thumbnail: "/assets/images/recommended_1.png",
    artistName: "The Weekend",
    songs: songs
  },
  {
    id: 5,
    title: "Dance Monkey",
    releaseDate: "08/07/2020",
    thumbnail: "/assets/images/recommended_2.png",
    artistName: "Tones and I",
    songs: songs
  },
  {
    id: 6,
    title: "Fine Line",
    releaseDate: "01/07/2020",
    thumbnail: "/assets/images/recommended_3.png",
    artistName: "Harry Styles",
    songs: songs
  },
  {
    id: 7,
    title: "Empini",
    releaseDate: "03/03/2020",
    thumbnail: "/assets/images/popular_1.png",
    artistName: "Kelly Khumalo, Empini",
    songs: songs
  },
  {
    id: 8,
    title: "We Made It",
    releaseDate: "08/07/2020",
    thumbnail: "/assets/images/popular_2.png",
    artistName: "Mi Casa",
    songs: songs
  },
  {
    id: 9,
    title: "Mortal Man",
    releaseDate: "01/07/2020",
    thumbnail: "/assets/images/popular_3.png",
    artistName: "Jeremy Loops",
    songs: songs
  }
];

var playlist = [{
    id: 1,
    title: "90's Hits",
    trakcs: 102,
    duration: "5:01:22",
    thumbnail: "/assets/images/playlist_small_1.png"
  },
  {
    id: 2,
    title: "Golden Oldies",
    trakcs: 133,
    duration: "6:21:44",
    thumbnail: "/assets/images/playlist_small_2.png"
  },
  {
    id: 3,
    title: "Love Songs",
    trakcs: 76,
    duration: "2:15:52",
    thumbnail: "/assets/images/playlist_small_3.png"
  },
  {
    id: 4,
    title: "Road Trip Mix",
    trakcs: 241,
    duration: "8:55:02",
    thumbnail: "/assets/images/playlist_small_4.png"
  },
  {
    id: 5,
    title: "Wokrout Mix",
    trakcs: 52,
    duration: "1:25:32",
    thumbnail: "/assets/images/playlist_small_5.png"
  },
]

//document.getElementById('albumCover').src = album

function updateCoverImg(id) {
  if (id) {
    selectedAlbum = album.filter(a => a.id === id)[0];
  } else {
    selectedAlbum = album[0];
  }
  if (!imageSet) {
    document.getElementById('albumCover').src = selectedAlbum.thumbnail;
    imageSet = true;
  }

  document.getElementById('albumName').innerHTML = selectedAlbum.title;
  document.getElementById('artis').innerHTML = selectedAlbum.artistName;
  document.getElementById('releaseData').innerHTML = 'Released:' + selectedAlbum.releaseDate;
  document.getElementById('tracks').innerHTML = 'Tracks:' + selectedAlbum.songs.length;

}

function setInitValues(id) {

  let newArray = album;
  newArray[id - 1] = {
    ...newArray[id - 1],
    playing: false
  }
  album = newArray;
  document.getElementById(`play-${id}`).src = "/assets/icons/play_filled.svg";
  playing = false;
  width = 0;
  duration = undefined;
  timer = 0;
  myVar;
  min = 0;
  sec = 0;
}

function togglePlaying(id = '') {
  let newArray = album;
  var audioPlayer = document.getElementById("audio-player");
  duration = audioPlayer.duration;
  document.getElementById("durationTime").innerHTML = "02:26";
  if (playing) {
    playing = false;
    audioPlayer.pause();
    document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
    document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/play_filled.svg";
    clearInterval(myVar);
  } else {
    playing = true;
    audioPlayer.play();
    document.getElementById("toggleBtn").src = "/assets/icons/pause_filled.svg";
    if (currentPlaying === undefined && shuffle && !id) {
      let randomSong = Math.floor(Math.random() * (album.length - 1))
      newArray[randomSong] = {
        ...newArray[randomSong],
        playing: true
      }
      album = newArray;
      currentPlaying = album[randomSong];

    } else if (currentPlaying === undefined && !id) {
      newArray[0] = {
        ...newArray[0],
        playing: true
      }
      album = newArray;
      currentPlaying = album[0];
    } else if (id) {
      newArray[id] = {
        ...newArray[id],
        playing: true
      }
      album = newArray;
      currentPlaying = album.filter(a => a.id === id)[0];
    }
    clearInterval(myVar);
    myVar = setInterval(myTimer, 1000);
    document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/pause_filled.svg";
  }

}

function playSelectedSong(id = '') {
  if (currentPlaying) {

    if (currentPlaying.id !== id) {
      setInitValues(currentPlaying.id);
      currentPlaying = album.filter(a => a.id === id)[0];
      let newArray = album;
      newArray[id] = {
        ...newArray[id],
        playing: true
      }
      album = newArray;
    }
  }
  togglePlaying(id);


}

function updateBar() {
  var element = document.getElementById("myprogressBar");

  if (timer <= duration) {
    element.style.width = (timer + 0.25) / duration * 100 + '%';
  } else {
    nextSongInAlbum()
    nextSong();
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

function repeatClicked() {
  if (repeat === true) {
    repeat = false;
    document.getElementById(`repeatBtn`).src = "/assets/icons/repeat_off.svg"
  } else {
    repeat = true;
    document.getElementById(`repeatBtn`).src = "/assets/icons/repeat.svg"
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
  if (shuffle === true) {
    shuffle = false;
    document.getElementById(`shuffleBtn`).src = "/assets/icons/shuffle_off.svg"
  } else {
    shuffle = true;
    document.getElementById(`shuffleBtn`).src = "/assets/icons/shuffle.svg"
  }

}

function prevSongInAlbum() {
  let newArray = album;

  if (currentPlaying) {
    if (currentPlaying.id - 1 > 0) {
      newArray[currentPlaying.id - 1] = {
        ...newArray[currentPlaying.id - 1],
        playing: true
      }

      album = newArray
      setInitValues(currentPlaying.id);
      currentPlaying = album.filter(a => a.playing === true)[0];
    } else {
      newArray[album.length - 1] = {
        ...newArray[album.length - 1],
        playing: true
      }

      album = newArray
      setInitValues(currentPlaying.id);
      currentPlaying = album[album.length - 1];
    }
    togglePlaying(currentPlaying.id);
  } else {
    console.log("NOTHING PLAYING");
  }
}

function nextSongInAlbum() {
  let newArray = album;

  if (currentPlaying) {
    if (currentPlaying.id + 1 !== album.length) {
      newArray[currentPlaying.id + 1] = {
        ...newArray[currentPlaying.id + 1],
        playing: true
      }

      album = newArray
      setInitValues(currentPlaying.id);
      currentPlaying = album.filter(a => a.playing === true)[0];
    } else {
      newArray[0] = {
        ...newArray[0],
        playing: true
      }

      album = newArray
      setInitValues(currentPlaying.id);
      currentPlaying = album[0];
    }
    togglePlaying(currentPlaying.id);
  } else {
    console.log("NOTHING PLAYING");
  }

}

function showPlayListModal(id) {
  selectedSong = songs.filter(s => s.id === id)[0];
  var modal = document.getElementById("playListModal");
  modal.style.display = "flex";
}

function addPlaylist(id) {
  var modal = document.getElementById("myModal");
  modal.style.display = "flex";
  document.getElementById(`popUpMessage`).innerHTML = selectedSong.name + ' was added to ' + playlist.filter(p => p.id === id)[0].title;
  setTimeout(() => {
    modal.style.display = "none"
  }, 1000)
  closePlaylistModal();
}