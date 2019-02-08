import React from "react";

import { Menu } from "./overlay-hud/menu.component";
import { UpperMenu } from "./overlay-hud/upper-menu.component";
import { Controls } from "./overlay-hud/controls.component";
import { EventMessages } from "./overlay-hud/event-messages.component";

export const OverlayHud = () => (
  <div className="overlay-hud">
    <Menu />
    <UpperMenu />
    <Controls />
    <EventMessages />
  </div>
);
