import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      `${endpoint}/albums/${this.props.match.params.id}/photos?albumId=${this.props.match.params.id}`
    );

    this.setState({ artist_albums: res.data });
  };

  render() {
    return (
      <div>
        <h4 style={{ marginLeft: 15 }}>Artist Albums</h4>
        {this.state.artist_albums.map(album => {
          return (
            <div key={album.id} className="row">
              <div className="col s12 m5">
                <div className="card">
                  <div className="card-image">
                    <img alt="album_url" src={album.url} />
                  </div>
                  <div className="card-content">
                    <span className="card-title">{album.title}</span>
                  </div>
                  <div className="card-action">
                    <Link to="/">View Tweets</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArtistAlbums;
