const { getAllSongs } = require("../controllers/songs.controller");
const {
  addPlaylistData,
  getMyPlaylistsData,
  playYourSong,
  addCountPlay,
} = require("../models/playlist.model");
const {songs} = require("../models/songs.model");

const getMyPlaylists = () => {
  return getMyPlaylistsData();
};

const addPlaylistById = (id) => {
  const findSong = songs.find((value) => value.id === id);
  const checkSong = getMyPlaylistsData().some((value) => value.id === findSong.id);
  if (!checkSong){

    addPlaylistData(findSong);
  }
};

const effectPlayYourSong = (id) => {
  playYourSong(id);
  const indexObject = getMyPlaylists().findIndex((value) => value.id === id);
  if(getMyPlaylists()[indexObject].play_conditions){
    addCountPlay(id);
  }
};

module.exports = {
  addPlaylistById,
  getMyPlaylists,
  effectPlayYourSong,
};
