import React, { useContext } from "react";
import { FeederContext } from "../../context/feeder.context";

export const Controls = () => {
  const feeder = useContext(FeederContext)
  
  return (
    <div className="fixed controls">
      <div className="ui inverted attached vertical labeled icon menu">
        <a className="item">
          <i className="pause icon" /> Pause
        </a>
        <a className="item" onClick={() => feeder!.start()}>
          <i className="zoom in icon" /> Play (Zoom in)
        </a>
        <a className="item" onClick={() => feeder!.stop()}>
          <i className="zoom out icon" /> Stop (Zoom out)
        </a>
        <a className="item">
          <i className="sync icon" /> Redraw
        </a>
      </div>
    </div>
  );
};
