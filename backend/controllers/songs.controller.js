const {getAllDataSongs, getMostPlayedDataSongs} = require('../services/songs.service');

const getAllSongs = () => {
  return { data: getAllDataSongs(), status: "success" };
};
  
const getMostPlayedSongs = () => {
  return { data: getMostPlayedDataSongs(), status: "success" };
};

module.exports = {
  getAllSongs,
  getMostPlayedSongs
};
