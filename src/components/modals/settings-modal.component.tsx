import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

export const SettingsModal = () => {
    const [open, setOpen] = useState(false);

    return (
    <Modal
      trigger={
        <a className="item" onClick={() => setOpen(true)}>
          <i className="cog icon" /> Settings
        </a>
      }
      closeIcon
      open={open}
    >
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content>
        <div className="ui form">
          <div className="field">
            <textarea />
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
