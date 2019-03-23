import React, { useContext } from "react";
import { ConfigContext } from "../../context/config.context";

export const EventMessages = () => {
  const {config: {VERTICAL_GAP}} = useContext(ConfigContext);

  return (
    <div className="fixed event-messages">
      <ul>
        <li>
          Vertical gap <small>{VERTICAL_GAP}</small>
        </li>
        <li>
          Something happened <small>10 mins</small>
        </li>
        <li>
          Something other <small>5 mins</small>
        </li>
        <li>
          Stable connections <small>2 mins</small>
        </li>
      </ul>
    </div>
  );
};
