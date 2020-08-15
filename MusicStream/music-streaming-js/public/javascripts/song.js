var playing = false;
var width = 0;
var duration = undefined;
var timer = 0;
var myVar;
var min = 0;
var sec = 0;
var shuffle = true;
var currentPlaying = undefined;

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