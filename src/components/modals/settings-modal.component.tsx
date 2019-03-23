import React, { useState, useContext } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { DropdownAllowAdditions } from "../dropdown-allow-addition";
import { ConfigEditor } from "../config-editor/config-editor.component";
import { ConfigContext } from "../../context/config.context";

export const SettingsModal = () => {
  const configContext = useContext(ConfigContext);
  const [open, setOpen] = useState(false);
  const [protocol, setProtocol] = useState("spark");
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
        <Button.Group>
          <Button
            positive={protocol === "spark"}
            onClick={() => setProtocol("spark")}
          >
            Spark
          </Button>
          <Button.Or />
          <Button
            positive={protocol === "flink"}
            onClick={() => setProtocol("flink")}
          >
            Flink
          </Button>
        </Button.Group>
        <div>
          <DropdownAllowAdditions maxElement={7} protocol={protocol} />
        </div>
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
