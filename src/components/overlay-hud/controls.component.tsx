import React from "react";

export const Controls = () => (
  <div className="fixed controls">
    <div className="ui inverted attached vertical labeled icon menu">
      <a className="item">
        <i className="pause icon" /> Pause
      </a>
      <a className="item">
        <i className="zoom in icon" /> Zoom in
      </a>
      <a className="item">
        <i className="zoom out icon" /> Zoom out
      </a>
      <a className="item">
        <i className="sync icon" /> Redraw
      </a>
    </div>
  </div>
);
