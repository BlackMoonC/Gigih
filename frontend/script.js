async function songList(){
    const response =await fetch("http://localhost:3000/api/songs");
    const songs = await response.json();
    console.log(songs);
}

songList();