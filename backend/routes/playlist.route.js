const express = require("express");
const router = express.Router();
const songs = require("../models/songs.model");

// connect controllers
const {
  getPlaylists,
  addPlaylist,
  playYourSong,
} = require("../controllers/playlist.controller");

router.get("/", (req, res) => {
  try {
    res.send(getPlaylists());
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/add/:id", (req, res, next) => {
  try {
    // console.log(songs);
    res.send(addPlaylist(req.params.id));
  } catch (err) {
    res.status(400).send({ status: "error", message: "ID not found" });
  }
});

router.post('/play/:id', (req, res) => {
  try {
    res.status(200).send(playYourSong(req.params.id));
  } catch (error) {
    res.status(404).send({status: 'error', message: "ID not found"});
  }
});

module.exports = router;
