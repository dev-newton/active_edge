import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const endpoint = API_URL;

class ArtistList extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    this.getAllArtists();
  }

  getAllArtists = async () => {
    const res = await axios.get(`${endpoint}/users`);
    this.setState({ artists: res.data });
  };

  render() {
    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>List of Artists</h4>
        </li>
        {this.state.artists.map(artist => {
          return (
            <div key={artist.id} class="row">
              <div class="col s12 m6">
                <div class="card  darken-1">
                  <div class="card-content dark-text">
                    <span class="card-title">{artist.name}</span>
                  </div>
                  <div class="card-action">
                    <Link to={`/artist/albums/${artist.id}`}>View Albums</Link>
                    <Link to={`/artist/tweets/${artist.id}`}>View Tweets</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ArtistList;
