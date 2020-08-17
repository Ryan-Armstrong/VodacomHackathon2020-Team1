var selectedPlayList = undefined;
var imageSet = false;

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



function updatePlayListCover(id) {
    if (id) {
        selectedPlayList = playlist.filter(s => s.id === id)[0];
    }
    if (!imageSet) {
        document.getElementById('playListCover').src = selectedPlayList.thumbnail;
        imageSet = true
    }
    document.getElementById('albumName').innerHTML = selectedPlayList.title;
    document.getElementById('tracks').innerHTML = 'Tracks: ' + selectedPlayList.tracks;
    document.getElementById('totalDuration').innerHTML = 'Length: ' + selectedPlayList.duration;
}