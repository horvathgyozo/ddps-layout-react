import React, { Component } from "react";
import "./App.css";
import { OverlayHud } from "./components/overlay-hud.component";
import { Visualization } from "./components/visualization.component";

class App extends Component {
  render() {
    return (
      <>
        <OverlayHud />
        <Visualization />
      </>
    );
  }
}

export default App;
