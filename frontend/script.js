const listSong = document.querySelector("#all-songs .list-song");
const mostPlayedList = document.querySelector("#most-played-songs .list-song");
const playlistList = document.querySelector("#myplaylist .card-list-song");
const URL = "http://localhost:8080";

const addPlaylist = async (id) => {
  console.log("addPlaylist id: " + id);
  const response = await fetch(`${URL}/playlists/add/${id}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const message = (await response.json()).message;
  alert(message);
  window.location.reload();
};

const playMusic = async (id) =>{
    const response = await fetch(`${URL}/playlists/play/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const message = (await response.json()).message;
    alert(message);
    window.location.reload();
}

function listItem(songs, classPlace) {
  let index = 1;
  songs.forEach((song) => {
    const pause = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>';
    const play = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    const add = '<svg xmlns="http://www.w3.org/2000/svg" height="1em"        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <path         d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>';
    
    const playMusic = song.play_conditions? pause : play;

    // create a new list item
    const itemList = document.createElement("div");
    const songInformation = document.createElement("div");
    const id = document.createElement("p");
    const img = document.createElement("img");
    const nameSong = document.createElement("p");
    const button = document.createElement("button");

    // add class for item list
    itemList.className = "item-list";
    songInformation.className = "song-information";

    // input element
    id.innerText = index;
    index += 1;
    img.src =
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80";
    nameSong.innerText = song.title;
    button.type = "button";
    button.setAttribute("onclick", classPlace === "playlist all songs"? `playMusic(${song.id})` :`addPlaylist(${song.id})`);
    button.innerHTML =
      classPlace === "playlist all songs"
        ? playMusic
        : add
    songInformation.appendChild(id);
    songInformation.appendChild(img);
    songInformation.appendChild(nameSong);
    itemList.appendChild(songInformation);
    itemList.appendChild(button);
    if (classPlace === "list all songs") {
      listSong.appendChild(itemList);
    } else if (classPlace === "most played songs") {
      mostPlayedList.appendChild(itemList);
    } else if (classPlace === "playlist all songs") {
      playlistList.appendChild(itemList);
    }
  });
}

// function makeCard(items) {
//     console.log(cardList)
//     console.log(items)
//     items.forEach(function(item) {
//         const cardItem = document.createElement('div');
//             const img = document.createElement('img');
//             const cardBody = document.createElement('div');
//                 const title = document.createElement('h3');
//                 const singers = document.createElement('p');

//         cardItem.className = 'card-list-item';
//         cardBody.className = 'card-body';
//         img.src = 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80';
//         title.innerText = item.title;
//         singers.innerHTML = `${item.artist.toString()}`;

//         cardBody.appendChild(title);
//         cardBody.appendChild(singers);
//         cardItem.appendChild(img);
//         cardItem.appendChild(cardBody);
//         cardList.appendChild(cardItem);
//     });
// }

async function songList() {
  const response = await fetch(`${URL}/songs/`);
  const songs = (await response.json()).data;
  listItem(songs, "list all songs");
}

async function mostPlayedSongList() {
  const response = await fetch(`${URL}/songs/most-played`);
  const songs = (await response.json()).data;
  listItem(songs, "most played songs");
}

async function playlists() {
  const response = await fetch(`${URL}/playlists/`);
  const songs = (await response.json()).data;
  listItem(songs, "playlist all songs");
}

songList();
mostPlayedSongList();
playlists();
console.log(allPlaylists);