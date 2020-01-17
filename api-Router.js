const apiRouter = require("express").Router();
const { getSongsByArtist } = require("./controllers.js");

apiRouter.get("/songs?", getSongsByArtist);

module.exports = apiRouter;
