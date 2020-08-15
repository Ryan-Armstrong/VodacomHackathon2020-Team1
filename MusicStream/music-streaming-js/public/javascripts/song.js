var playing = false;
var width = 0;
var duration = undefined;
var timer = 0;
var myVar;
var min = 0;
var sec = 0;
var currentPlaying = undefined;
var counter = 0;
var audioPlayer

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

function updateSongImg(id) {
    let selectedSong
    audioPlayer = document.getElementById("audio-player");
    if (id) {
        selectedSong = singleSongs.filter(s => s.id === id)[0]
    } else {
        selectedSong = singleSongs[0]
    }

    document.getElementById('albumCover').src = selectedSong.thumbnail;
    document.getElementById('albumName').innerHTML = selectedSong.title;
    document.getElementById('artis').innerHTML = selectedSong.artistName;

}



function playSong(key) {
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
        if (currentPlaying === undefined && !key) {
            console.log("NOTHING IS PLAYING");
            currentPlaying = singleSongs[0];
            audioPlayer.src = currentPlaying.audio;
        } else if (key) {
            console.log("KEY", key);
            currentPlaying = singleSongs[key];
            audioPlayer.src = currentPlaying.audio;
            document.getElementById('albumCover').src = currentPlaying.thumbnail;
            document.getElementById('albumName').innerHTML = currentPlaying.title;
            document.getElementById('artis').innerHTML = currentPlaying.artistName;
        }
        audioPlayer.load();
        audioPlayer.play();
        clearInterval(myVar);
        myVar = setInterval(myTimer, 1000);
    }
}


function prevSong() {
    console.log("counter", counter);
    if (counter > 0) {
        stopAndClear();
        counter--;
        setTimeout(() => {
            playSong(counter);
        }, 500)
    } else {
        stopAndClear();
        playSong(2);
    }
}

function nextSong() {
    console.log("counter", counter);
    if (counter < 1) {
        stopAndClear();
        counter++;
        setTimeout(() => {
            playSong(counter);
        }, 500)
    } else {
        stopAndClear();
        playSong(0);
    }
}

function stopAndClear() {
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.pause();
    document.getElementById("toggleBtn").src = "/assets/icons/play_filled.svg";
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

    if (album[counter].fav) {
        newArray[counter] = {
            ...newArray[counter],
            fav: false
        }
        singleSongs = newArray;
        document.getElementById(`favIcon`).src = "/assets/icons/favourite.svg"
        document.getElementById(`popUpMessage`).innerHTML = album[counter].title + ' was removed from favourites'
    } else {
        newArray[counter] = {
            ...newArray[counter],
            fav: true
        }
        singleSongs = newArray;
        document.getElementById(`favIcon`).src = "/assets/icons/favourite_filled.svg"
        document.getElementById(`popUpMessage`).innerHTML = album[counter].title + ' was added to favourites'
    }
}