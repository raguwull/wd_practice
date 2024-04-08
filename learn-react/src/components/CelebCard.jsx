import React from "react";
import Details from "./Details";
import "./CelebCard.css";

function createAlbums(album) {
  return <Details info={album} />;
}

function CelebCard(props) {
  return (
    <div className="celeb-div d-flex flex-column justify-content-center">
      <h2 className="celeb-title p-2">{props.stageName}</h2>
      <div className="image-container">
        <img className="celeb-image p-2" src={props.url} />
      </div>
      <div className="celeb-albums p-2">
        {props.albumsReleased.map(createAlbums)}
      </div>
    </div>
  );
}

export default CelebCard;