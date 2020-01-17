const axios = require("axios");

exports.fetchSongsByArtist = artist_name => {
  return axios
    .get(`https://itunes.apple.com/search?term=${artist_name}`)
    .then(response => {
      let arr = [];
      let artArray = [];
      response.data.results.map(song => {
        arr.push(song.trackName);
        artArray.push(song.artworkUrl100);
      });
      let obj = { songsArray: arr, artArray: artArray };
      return obj;
    });
};
