import React, { Component } from "react";

class ArtistList extends Component {
  getAllArtists = () => {
    fetch("https://jsonplaceholder.typicod.com/users").then(res =>
      console.log(res)
    );
  };

  render() {
    return <div></div>;
  }
}

export default ArtistList;
