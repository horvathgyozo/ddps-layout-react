import React from "react";
import { SettingsModal } from "../modals/settings-modal.component";

export const Menu = () => (
  <div className="fixed menu">
    <div className="ui inverted attached vertical menu">
      <div className="active teal item">
        <i className="bars icon" /> DDPS
      </div>
      <SettingsModal />
      <a className="item">
        <i className="desktop icon" /> Something else
      </a>
    </div>
  </div>
);
