var express = require('express');
var router = express.Router();
var mockData = require('./mock-data')

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
    id: "1",
    title: "Cardigan",
    releaseDate: "03/03/2020",
    thumbnail: "/assets/images/new_release_1.png",
    artistName: "Taylor Swift, Folklore",
  },
  {
    id: "2",
    title: "Easy",
    releaseDate: "08/07/2020",
    thumbnail: "new-release-thumbnails/new_release_2.png",
    artistName: "Troye Sivan",
  },
  {
    id: "3",
    title: "Stupid Love",
    releaseDate: "01/07/2020",
    thumbnail: "new-release-thumbnails/new_release_3.png",
    artistName: "Lady Gaga",
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/album/:id', function (req, res, next) {

  res.render('album', {
    output: req.params.id,
    duration: 168,
    data: album
  });
});

router.get('/song/:id', function (req, res, next) {

  let selectedSong = singleSongs.filter(s => s.id === req.params.id)[0];

  res.render('song', {
    output: req.params.id,
    duration: 168,
    song: selectedSong
  });
})

module.exports = router;