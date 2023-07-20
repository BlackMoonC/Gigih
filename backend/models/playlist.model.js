let playlist = [];

const addPlaylistData = (newPlaylist) => {
  playlist = [...playlist, { ...newPlaylist, play_count: 0, play_conditions: false}];
  console.log(playlist);
};

const getMyPlaylistsData = () => {
  return playlist;
};

const playYourSong = (id) => {
  const indexObject = playlist.findIndex((value) => value.id === id);
  playlist[indexObject].play_conditions = !playlist[indexObject].play_conditions;
};

const addCountPlay = (id) => {
  const indexObject = playlist.findIndex((value) => value.id === id);
  playlist[indexObject].play_count += 1;
};

module.exports = {
  addPlaylistData,
  getMyPlaylistsData,
  playYourSong,
  addCountPlay,
};
