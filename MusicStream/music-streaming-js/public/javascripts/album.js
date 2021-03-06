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

var singleSongs = [{
    id: 1,
    title: "Cardigan",
    releaseDate: "03/03/2020",
    thumbnail: "/assets/images/new_release_1.png",
    artistName: "Taylor Swift, Folklore",
    audio: "/assets/audio/song.mp3",
    fav: false
  },
  {
    id: 2,
    title: "Easy",
    releaseDate: "08/07/2020",
    thumbnail: "/assets/images/new_release_2.png",
    artistName: "Troye Sivan",
    audio: "/assets/audio/sample.mp3",
    fav: false
  },
  {
    id: 3,
    title: "Stupid Love",
    releaseDate: "01/07/2020",
    thumbnail: "/assets/images/new_release_3.png",
    artistName: "Lady Gaga",
    audio: "/assets/audio/classical.mp3",
    fav: false
  }
];

var playlist = [{
    id: 1,
    title: "90's Hits",
    tracks: 102,
    duration: "5:01:22",
    thumbnail: "/assets/images/playlist_small_1.png"
  },
  {
    id: 2,
    title: "Golden Oldies",
    tracks: 133,
    duration: "6:21:44",
    thumbnail: "/assets/images/playlist_small_2.png"
  },
  {
    id: 3,
    title: "Love Songs",
    tracks: 76,
    duration: "2:15:52",
    thumbnail: "/assets/images/playlist_small_3.png"
  },
  {
    id: 4,
    title: "Road Trip Mix",
    tracks: 241,
    duration: "8:55:02",
    thumbnail: "/assets/images/playlist_small_4.png"
  },
  {
    id: 5,
    title: "Wokrout Mix",
    tracks: 52,
    duration: "1:25:32",
    thumbnail: "/assets/images/playlist_small_5.png"
  },
]

var songs = [{
  id: 1,
  name: 'Sober',
  fav: false,
  playing: false,
  audio: "/assets/audio/sample.mp3",
  duration: 127.2,
  durationInString: "02:12"
}, {
  id: 2,
  name: 'Obsessed',
  fav: false,
  playing: false,
  audio: "/assets/audio/song.mp3",
  duration: 196.5,
  durationInString: "03:27"
}, {
  id: 3,
  name: 'How could you',
  fav: true,
  playing: false,
  audio: "/assets/audio/classical.mp3",
  duration: 258,
  durationInString: "04:30"
}, {
  id: 4,
  name: 'Sweet wine',
  fav: false,
  playing: false,
  audio: "/assets/audio/sample.mp3",
  duration: 127.2,
  durationInString: "02:12"
}, {
  id: 5,
  name: 'Love Everything',
  fav: false,
  playing: false,
  audio: "/assets/audio/classical.mp3",
  duration: 258,
  durationInString: "04:30"
}, {
  id: 6,
  name: 'Church bells',
  fav: false,
  playing: false,
  audio: "/assets/audio/sample.mp3",
  duration: 127.2,
  durationInString: "02:12"
}, {
  id: 7,
  name: 'Love',
  fav: false,
  playing: false,
  audio: "/assets/audio/song.mp3",
  duration: 196.5,
  durationInString: "03:27"
}, {
  id: 8,
  name: 'Passion',
  fav: false,
  playing: false,
  audio: "/assets/audio/classical.mp3",
  duration: 258,
  durationInString: "04:30"
}];

function updateAlbumCoverImg(id) {
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

function toggleAlbumPlaying(id = '') {
  let newArray = songs;
  var audioPlayer = document.getElementById("audio-player");

  if (playing) {
    playing = false;
    audioPlayer.pause();
    document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
    document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/play_filled.svg";
    clearInterval(myVar);
  } else {
    if (id) {
      let index = songs.findIndex(s => s.id === id);
      if (currentPlaying === undefined) {
        newArray[index] = {
          ...newArray[index],
          playing: true
        }
        songs = newArray;
        currentPlaying = songs[index];
        audioPlayer.src = currentPlaying.audio
        duration = currentPlaying.duration;
      } else if (currentPlaying !== undefined) {
        if (id !== currentPlaying.id) {
          pauseAndClear();
          newArray[index] = {
            ...newArray[index],
            playing: true
          }
          songs = newArray;
          currentPlaying = songs[index];
          audioPlayer.src = currentPlaying.audio
          duration = currentPlaying.duration;
        }
      }
    } else if (currentPlaying == undefined) {
      setCurrentAlbumSong();
      audioPlayer.src = currentPlaying.audio;
      duration = currentPlaying.duration;
    }

    playing = true;
    audioPlayer.play();
    clearInterval(myVar);
    myVar = setInterval(myTimer, 1000);
    document.getElementById("durationTime").innerHTML = currentPlaying.durationInString;
    document.getElementById("toggleBtn").src = "/assets/icons/pause_filled.svg";
    document.getElementById(`play-${currentPlaying.id}`).src = "/assets/icons/pause_filled.svg";
  }

}

function pauseAndClear() {
  let newArray = songs;
  let index = songs.findIndex(s => s.playing === true);
  document.getElementById("myprogressBar").style.width = "0%";
  if (index >= 0) {
    document.getElementById(`play-${songs[index].id}`).src = "/assets/icons/play_filled.svg";
    newArray[index] = {
      ...newArray[index],
      playing: false
    }
  }
  var audioPlayer = document.getElementById("audio-player");
  audioPlayer.pause();
  document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
  document.getElementById("durationTime").innerHTML = "00:00";
  playing = false;
  width = 0;
  timer = 0;
  min = 0;
  sec = 0;
}

function setCurrentAlbumSong() {
  let newArray = songs;
  if (!currentPlaying && shuffle) {
    let randomSong = Math.floor(Math.random() * (songs.length - 1))
    newArray[randomSong] = {
      ...newArray[randomSong],
      playing: true
    }
    songs = newArray;
    currentPlaying = songs[randomSong];
  } else if (!currentPlaying) {
    currentPlaying = songs[0];
  }
}

function playSelectedSong(id = '') {
  if (currentPlaying !== undefined) {
    if (id !== currentPlaying.id) {
      pauseAndClear();
    }
  }
  toggleAlbumPlaying(id);
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
  console.log("FAV", id);
  let newArray = songs;
  let index = songs.findIndex(s => s.id === id);
  if (songs[index].fav) {
    newArray[index] = {
      ...newArray[index],
      fav: false
    }
    songs = newArray;
    document.getElementById(`fav-${id}`).classList.remove('imageLikeFav');
    document.getElementById(`fav-${id}`).src = "/assets/icons/favourite.svg"
    document.getElementById(`popUpMessage`).innerHTML = songs[index].name + ' was removed from favourites'
  } else {
    newArray[index] = {
      ...newArray[index],
      fav: true
    }
    songs = newArray;
    document.getElementById(`fav-${id}`).classList.add('imageLikeFav');
    document.getElementById(`fav-${id}`).src = "/assets/icons/favourite_filled.svg"
    document.getElementById(`popUpMessage`).innerHTML = songs[index].name + ' was added to favourites'
  }

  var modal = document.getElementById("myModal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.display = "none"
  }, 1000)
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
  let nextSongId = undefined;
  pauseAndClear();
  if (currentPlaying) {
    let index = songs.findIndex(s => s.id == currentPlaying.id);
    if (index > 0) {
      nextSongId = songs[index - 1].id;
    } else {
      nextSongId = songs[songs.length - 1].id;
    }
    setTimeout(() => {
      toggleAlbumPlaying(nextSongId);
    }, 200)

  } else {
    toggleAlbumPlaying(songs[0].id);
  }
}

function nextSongInAlbum() {
  let nextSongId = undefined;
  pauseAndClear();
  if (currentPlaying) {
    let index = songs.findIndex(s => s.id == currentPlaying.id);
    if (index < songs.length - 1) {
      nextSongId = songs[index + 1].id;
    } else {
      nextSongId = songs[0].id;
    }
    setTimeout(() => {
      toggleAlbumPlaying(nextSongId);
    }, 200)

  } else {
    toggleAlbumPlaying(songs[0].id);
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