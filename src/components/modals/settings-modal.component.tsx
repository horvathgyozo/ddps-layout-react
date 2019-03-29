import React, { useState, useContext } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { ConfigEditor } from "../config-editor/config-editor.component";
import { ConfigContext } from "../../context/config.context";

export const SettingsModal = () => {
  const configContext = useContext(ConfigContext);
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState(configContext.config);

  const handleSave = () => {
    configContext.setConfig(config);
    setOpen(false);
  }

  const handleCancel = () => {
    setConfig(configContext.config)
    setOpen(false)
  }

  return (
    <Modal
      trigger={
        <a className="item" onClick={() => setOpen(true)}>
          <i className="cog icon" /> Settings
        </a>
      }
      closeIcon
      open={open}
      onClose={handleCancel}
      closeOnDimmerClick={false}
    >
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content>
        <div className="ui form">
          <div className="field">
            <label>Configuration</label>
            <ConfigEditor config={config} setConfig={setConfig} />
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={handleSave}>
          <Icon name="checkmark" /> Got it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
