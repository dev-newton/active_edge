import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../config";

const endpoint = API_URL;
// const artist_id = this.props.match.params.id;

class ArtistAlbums extends Component {
  state = {
    artist_albums: []
  };
  componentDidMount() {
    this.getAllArtistAlbums();
  }

  getAllArtistAlbums = async () => {
    const res = await axios.get(
      `${endpoint}/photos?albumId=${this.props.match.params.id}`
    );
    console.log(res.data);
    this.setState({ artist_albums: res.data });
  };

  render() {
    return (
      <div>
        ArtistAlbum
        {this.state.artist_albums.map(album => {
          return (
            <div>
              <img src={album.url} />
              <h3>{album.title}</h3>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArtistAlbums;
