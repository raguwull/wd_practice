import React from "react";
import CelebCard from "./CelebCard";
import artists from "./CelebData";

function CreateCard(artist) {
  return (
    <CelebCard
      id={artist.id}
      stageName={artist.stageName}
      url={artist.url}
      albumsReleased={artist.albumsReleased}
    />
  );
}

function App() {
  return (
    <div className="app-list-container">
      <div className="app-list">{artists.map(CreateCard)}</div>
    </div>
  );
}

export default App;
