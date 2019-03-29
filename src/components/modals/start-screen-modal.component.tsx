import React, { useState, useContext } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import { DropdownAllowAdditions } from "../dropdown-allow-addition";
import { ConfigEditor } from "../config-editor/config-editor.component";
import { ConfigContext } from "../../context/config.context";
import { FeederContext } from "../../context/feeder.context";

export const StartScreenModal = () => {
  const configContext = useContext(ConfigContext);
  const feeder = useContext(FeederContext)!;
  const [open, setOpen] = useState(true);
  const [protocol, setProtocol] = useState("spark");
  const [config, setConfig] = useState(configContext.config);

  const handleStart = () => {
    feeder.start();
    configContext.setConfig(config);
    setOpen(false);
  }

  const handleCancel = () => {
    setConfig(configContext.config)
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      closeOnDimmerClick={false}
      dimmer="blurring"
    >
      <Modal.Header>DDPS visualization</Modal.Header>
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
        <Button color="green" onClick={handleStart}>
          <Icon name="checkmark" /> Start
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
