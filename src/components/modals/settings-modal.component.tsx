import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import DropdownAllowAdditions from "../dropdown-allow-addition";

export const SettingsModal = () => {
    const [open, setOpen] = useState(false);
    const [protocol, setProtocol] = useState('spark')
    return (
        <Modal
            trigger={
                <a className="item" onClick={() => setOpen(true)}>
                    <i className="cog icon" /> Settings
                </a>
            }
            closeIcon
            open={open}
            onClose={() => setOpen(false)}
            closeOnDimmerClick={false}
        >
            <Modal.Header>Settings</Modal.Header>
            <Modal.Content>
            <Button.Group>
                <Button positive={protocol==='spark'} onClick={() => setProtocol('spark')}>Spark</Button>
                <Button.Or />
                <Button positive={protocol==='flink'} onClick={() => setProtocol('flink')}>Flink</Button>
            </Button.Group>
                <div>
                    <DropdownAllowAdditions maxElement={7} protocol={protocol}/>
                </div>
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