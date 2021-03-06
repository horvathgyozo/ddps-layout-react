import React, { Component } from "react";
import "./App.css";
import { OverlayHud } from "./components/overlay-hud.component";
import { Visualization } from "./components/visualization.component";
import { ConfigProvider } from "./context/config.context";
import { FeederProvider } from "./context/feeder.context";
import { StartScreenModal } from "./components/modals/start-screen-modal.component";

class App extends Component {
  render() {
    return (
      <ConfigProvider>
        <FeederProvider>
          <StartScreenModal />
          <OverlayHud />
          <Visualization />
        </FeederProvider>
      </ConfigProvider>
    );
  }
}

export default App;
