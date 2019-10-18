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
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>List of Artists</h4>
        </li>
        {this.state.artists.map(artist => {
          return (
            <Link to={`/artist/${artist.id}`} key={artist.id}>
              <li class="collection-item">
                <div>
                  {artist.name}
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">send</i>
                  </a>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default ArtistList;
