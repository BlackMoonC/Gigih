const express = require("express");
const router = express.Router();
const {getAllSongs, getMostPlayedSongs} = require("../controllers/songs.controller");

router.get("/", (req, res) => { 
  try{
    res.send(getAllSongs());
  }catch(err){
    res.status(400).send(err)
  }
});

router.get("/most-played", (req, res) => { 
  try{
    res.send(getMostPlayedSongs());
  }catch(err){
    res.status(400).send(err)
  }
});

router.post("/songs/:id", (req, res, next) => {
  try{

    const value = songs.find((value) => value.id === req.params.id);
    const newPlaylist = [...playlist, value];
    playlist = newPlaylist;
  
    res.send({ status: "success", message: "Buku berhasil ditambahkan" });
  }catch(err){
    res.status(400).send({ status: "error", message: "ID tidak ditemukan"})
  }
});

module.exports = router;
