import React from "react";
import { Grid } from "semantic-ui-react";
import { ConfigEditorInput } from "./config-editor-input.component";
import { IConfigValue } from "../../context/config.context";

export const ConfigEditorRow = ({
    prop,
    value,
    onValueChange
  }: {
    prop: string;
    value: IConfigValue;
    onValueChange: (prop: string, value: IConfigValue) => void;
  }) => {
    return (
      <Grid.Row verticalAlign="middle">
        <Grid.Column>{prop}</Grid.Column>
        <Grid.Column>
          <ConfigEditorInput
            value={value}
            onValueChange={value => onValueChange(prop, value)}
          />
        </Grid.Column>
      </Grid.Row>
    );
  };