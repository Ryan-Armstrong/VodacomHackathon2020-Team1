App({
  newReleases: [
    {
      id:"1",
      title: "Cardigan",
      releaseDate: "03/03/2020",
      thumbnail: "new_release_1.png",
      artistName: "Taylor Swift, Folklore",
      songs: [
        {
          id:"1",
          title: "Cardigan"
        }
      ]
    },
    {
      id:"2",
      title: "Easy",
      releaseDate: "08/07/2020",
      thumbnail: "new_release_2.png",
      artistName: "Troye Sivan",
      songs: [
        {
          id:"2",
          title: "Easy"
        }
      ]
    },
    {
      id:"3",
      title: "Stupid Love",
      releaseDate: "01/07/2020",
      thumbnail: "new_release_3.png",
      artistName: "Lady Gaga",
      songs: [
        {
          id:"3",
          title: "Easy"
        }
      ]
    }
  ],

  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
});
