import "./App.css";
import CardItemList from "./components/CardItemList/CardItemList";
// import Avatar from './components/Avatar/Avatar'
import ListSongs from "./components/ListSongs/ListSongs";

function App() {
  return (
    <>
      <header>
        <h1>Spotify</h1>
      </header>
      <main>
        <section id="all-songs">
          <h1>All Songs</h1>
          <div className="list-song">
            <ListSongs />
          </div>
        </section>
        {/* <section id="most-played-songs">
          <h1 className="title">Most Played Songs</h1>
          <div className="list-song">
            <div className="item-list">
              <div className="song-information">
                <p>1</p>
                <img
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
                  alt=""
                />
                <p>Radio</p>
              </div>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
            <div className="item-list">
              <div className="song-information">
                <p>2</p>
                <img
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
                  alt=""
                />
                <p>Radio</p>
              </div>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
          </div>
        </section> */}
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
