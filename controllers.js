const { fetchSongsByArtist } = require("./models");

exports.getSongsByArtist = (req, res, next) => {
  console.log(req.query.artist_name);
  let artist_name = req.query.artist_name;
  let objArtist = artist_name.artist_name;
  let randNum = Math.ceil(Math.random() * 45);
  let randNum2 = Math.ceil(Math.random() * 19);
  let randNum3 = Math.ceil(Math.random() * 6);
  fetchSongsByArtist(artist_name)
    .then(function(obj) {
      // console.log(obj);
      let returnObj = {
        artistName: artist_name,
        randNum: randNum,
        songsArray: obj.songsArray,
        artArray: obj.artArray,
        randNum2: randNum2,
        fakeSongs: [
          "Everything I Wanted",
          "Circles",
          "I Can See Your Moves",
          "Broken",
          "Bohemian Rhapsody",
          "You Are The Reason",
          "Morning Mist",
          "Speechless",
          "Believer",
          "Adore You",
          "Ain't My Fault",
          "Fight Song",
          "Dark Horse",
          "The Climb",
          "Bound For Failure",
          "Electric Blur",
          "The Secrets",
          "Bye Bye Bye",
          "One More Time",
          "Breathless",
          "Wizards"
        ]
      };
      let pagesObj = {
        1: "./newSongs.ejs",
        2: "./newSongs2.ejs",
        3: "./newSongs3.ejs",
        4: "./newSongs4.ejs",
        5: "./newSongs5.ejs",
        6: "./newSongs6.ejs"
      };
      console.log(randNum3);
      res.status(200).render(pagesObj[randNum3], { returnObj });
    })
    .catch(function(err) {
      next({
        code: err.response.status,
        msg: "Could not send all songs :("
      });
    });
};
