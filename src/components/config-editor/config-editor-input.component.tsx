import React from "react";
import { IConfigValue } from "./config-editor.component";
import { Input, Checkbox } from "semantic-ui-react";

export const ConfigEditorInput = ({
    value,
    onValueChange
  }: {
    value: IConfigValue;
    onValueChange: (value: IConfigValue) => void;
  }) => {
    if (typeof value === "string")
      return (
        <Input
          type="text"
          value={value}
          onChange={(e, { value }) => onValueChange(value)}
        />
      );
    if (typeof value === "number")
      return (
        <Input
          type="number"
          value={value}
          onChange={(e, { value }) => onValueChange(parseInt(value))}
        />
      );
    return (
      <Checkbox
        toggle
        checked={value}
        onChange={(e, { checked }) => onValueChange(checked || false)}
      />
    );
  };
  