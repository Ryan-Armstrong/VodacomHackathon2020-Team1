var playing = false;
var width = 0;
var duration = undefined;
var timer = 0;
var myVar;
var min = 0;
var sec = 0;
var counter = 0;
var audioPlayer
var imageSet = false;
var currentSong = undefined;
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
    audio: "/assets/audio/song.mp3",
    duration: 196.5,
    durationInString: "03:27"
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

var selectedSong = singleSongs[0];

function updateSongImg(id) {
    if (id) {
        selectedSong = singleSongs.filter(s => s.id === id)[0];
    }
    if (!imageSet) {
        document.getElementById('songCover').src = selectedSong.thumbnail;
        imageSet = true
    }
    document.getElementById('albumName').innerHTML = selectedSong.title;
    document.getElementById('artis').innerHTML = selectedSong.artistName;
}



function playSong(id) {
    audioPlayer = document.getElementById("audio-player");
    duration = audioPlayer.duration;
    document.getElementById("durationTime").innerHTML = "02:26";
    if (playing) {
        playing = false;
        audioPlayer.pause();
        document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
        clearInterval(myVar);
    } else {
        playing = true;
        document.getElementById("toggleBtn").src = "/assets/icons/pause_filled.svg";
        if (currentSong === undefined && !id) {
            currentSong = selectedSong
            audioPlayer.src = currentSong.audio;
        } else if (id) {
            currentSong = singleSongs.filter(s => s.id === id)[0];
            audioPlayer.src = currentSong.audio;
            document.getElementById('songCover').src = currentSong.thumbnail;
            document.getElementById('albumName').innerHTML = currentSong.title;
            document.getElementById('artis').innerHTML = currentSong.artistName;
        }
        audioPlayer.play();
        clearInterval(myVar);
        myVar = setInterval(myTimer, 1000);
    }
}

function prevSong() {
    setCurrectSong();

    if (currentSong.id !== 1) {
        stopAndClear();

        playSong(currentSong.id - 1);

    } else {
        stopAndClear();
        playSong(3);
    }
}

function nextSong() {

    setCurrectSong();

    if (currentSong.id !== 3) {
        stopAndClear();
        playSong(currentSong.id + 1);

    } else {
        stopAndClear();
        playSong(1);
    }
}

function stopAndClear() {
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.pause();
    document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
    document.getElementById("durationTime").innerHTML = "00:00";
    clearInterval(myVar);
    playing = false;
    width = 0;
    duration = undefined;
    timer = 0;
    myVar;
    min = 0;
    sec = 0;
}

function addToFav() {
    var modal = document.getElementById("myModal");
    let newArray = singleSongs;
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.display = "none"
    }, 1000)

    setCurrectSong();
    let index = singleSongs.findIndex(s => s.id === currentSong.id);
    if (singleSongs[index].fav) {
        newArray[index] = {
            ...newArray[index],
            fav: false
        }
        singleSongs = newArray;
        document.getElementById(`favIcon`).src = "/assets/icons/favourite.svg"
        document.getElementById(`popUpMessage`).innerHTML = currentSong.title + ' was removed from favourites'
    } else {
        newArray[index] = {
            ...newArray[index],
            fav: true
        }
        singleSongs = newArray;
        console.log("singleSongs", singleSongs);
        document.getElementById(`favIcon`).src = "/assets/icons/favourite_filled.svg"
        document.getElementById(`popUpMessage`).innerHTML = currentSong.title + ' was added to favourites'
    }
}

function setCurrectSong() {
    if (!currentSong) {
        currentSong = selectedSong;
    } else {
        return;
    }
}

function addToPlayList() {
    var modal = document.getElementById("playListModal");
    modal.style.display = "flex";
}

function closePlaylistModal() {
    var modal = document.getElementById("playListModal");
    modal.style.display = "none";
}

function playListAdd(id) {
    setCurrectSong();
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
    document.getElementById(`popUpMessage`).innerHTML = currentSong.title + ' was added to ' + playlist.filter(p => p.id === id)[0].title;
    setTimeout(() => {
        modal.style.display = "none"
    }, 1000)
    closePlaylistModal();
}