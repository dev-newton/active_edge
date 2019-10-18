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
            <Link to={`/artist/albums/${artist.id}`} key={artist.id}>
              <li className="collection-item">
                <div>
                  {artist.name}
                  <div href="#!" className="secondary-content">
                    <i className="material-icons">chevron_right</i>
                  </div>
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
