let playlist = [];

const addPlaylistData = (newPlaylist) => {
  playlist = [...playlist, { ...newPlaylist, play_count: 0, play_conditions: false}];
  console.log(playlist);
};

const getMyPlaylistsData = () => {
  return playlist;
};

const playYourSong = (id) => {
  console.log(playlist)
  const indexObject = playlist.findIndex((value) => value.id === id);
  const objectIndex = playlist[indexObject].play_conditions;
  if(objectIndex){
    playlist[indexObject].play_conditions = !objectIndex;
  } else{
    playlist = playlist.map(value => value = {...value, play_conditions : false})
    playlist[indexObject].play_conditions = !objectIndex;
  }
  console.log(playlist)
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
