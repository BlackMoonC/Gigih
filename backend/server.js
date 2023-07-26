const express = require("express");
const cors = require("cors");
const app = express();

// List for routes
const songsRoute = require("./routes/songs.route");
const playlistRoute = require("./routes/playlist.route");

app.use(cors());

app.use("/songs", songsRoute);

app.use("/playlists", playlistRoute);

const listener = app.listen(8080, function () {
  console.log("Listening on port http://localhost:" + listener.address().port);
});
