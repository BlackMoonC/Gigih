const { addPlaylistById, getMyPlaylists, effectPlayYourSong } = require("../services/playlist.service");

const getPlaylists = () => {
  return { data: getMyPlaylists(), status: "success" };
};

const addPlaylist = (id) => {
    addPlaylistById(id)
    return{ status: "success", message: "Buku berhasil ditambahkan" }
};

const playYourSong = (id) => {
    effectPlayYourSong(id);
    return{ status: "success", message: "Your play was successfully" }
};

module.exports = {
    getPlaylists,
    addPlaylist,
    playYourSong,
};
