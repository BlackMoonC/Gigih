async function songList(){
    const response =await fetch("http://localhost:8080/songs/");
    const songs = await response.json();
    console.log(songs);
}

songList();