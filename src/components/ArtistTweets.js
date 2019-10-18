import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../config";

const endpoint = API_URL;

class ArtistTweets extends Component {
  state = {
    artist_tweets: []
  };

  componentDidMount() {
    this.getAllArtistAlbums();
  }

  getAllArtistAlbums = async () => {
    const res = await axios.get(
      `${endpoint}/comments?postId=${this.props.match.params.id}`
    );

    this.setState({ artist_tweets: res.data });
  };
  render() {
    return (
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>Tweets</h4>
        </li>
        {this.state.artist_tweets.map(tweet => {
          return <li class="collection-item">{tweet.body}</li>;
        })}
      </ul>
    );
  }
}

export default ArtistTweets;
