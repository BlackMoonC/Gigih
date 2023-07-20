const {songs} = require("../models/songs.model");

const getAllDataSongs = () => {
  return songs;
};

const getMostPlayedDataSongs = () => {
  const mostPlayedDataSongs = songs.sort((a, b) => b.plays - a.plays);  
  console.log(mostPlayedDataSongs);
  return mostPlayedDataSongs;
};

module.exports = { getAllDataSongs, getMostPlayedDataSongs};
