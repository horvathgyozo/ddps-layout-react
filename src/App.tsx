import React, { Component } from "react";
import "./App.css";
import { OverlayHud } from "./components/overlay-hud.component";
import { Visualization } from "./components/visualization.component";
import { ConfigProvider } from "./context/config.context";

class App extends Component {
  render() {
    return (
      <ConfigProvider>
        <OverlayHud />
        <Visualization />
      </ConfigProvider>
    );
  }
}

export default App;
