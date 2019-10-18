import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ArtistList from "./components/ArtistList";
import ArtistAlbums from "./components/ArtistAlbums";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={ArtistList} />
        <Route exact path="/artist/:id" component={ArtistAlbums} />
      </BrowserRouter>
    );
  }
}

export default App;
