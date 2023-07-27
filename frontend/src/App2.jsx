import { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = "http://localhost:8080"

import "./App.css";
import CardItemList from "./components/CardItemList/CardItemList";
// import Avatar from './components/Avatar/Avatar'
import ListSongs from "./components/ListSongs/ListSongs";

function App() {
  const [songs, setSongs] = useState(null);
  const [mostPlayedSongs, setMostPlayedSongs] = useState(null);

  useEffect(() => {
    const songs = async() => {
      try{
        axios.get(`${baseUrl}/songs`).then((response) => {
          const songs = response.data;
          setSongs(songs.data);
        })
        axios.get(`${baseUrl}/songs/most-played`).then((response) => {
          const songs = response.data;
          setMostPlayedSongs(songs.data);
        })

      } catch (err) {
        console.error(err);
      }
    }
    songs();
  }, []);  

  return (
    <>
      <header>
        <h1>Spotify</h1>
      </header>
      <main>
        <section id="all-songs">
          <h1>All Songs</h1>
          <div className="list-song">
            {
              songs.map((song) => (
                <ListSongs key={song.id} title={song.title}/>
              ))
            }
          </div>
        </section>
        <section id="most-played-songs">
          <h1 className="title">Most Played Songs</h1>
          <div className="list-song">
          {
              mostPlayedSongs.map((song) => (
                <ListSongs key={song.id} title={song.title}/>
              ))
            }
          </div>
        </section>
        <section>
          <h1 className="title">Your Playlist</h1>
          <div className="card-list-song">
            <CardItemList/>
            <div className="card-list-item">
              <img
                src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
                alt=""
              />
              <div className="card-body">
                <h3 className="title">Radio</h3>
                <p>Lana Del Ray</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
