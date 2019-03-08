import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { ConfigEditorRow } from "./config-editor-row.component";

export type IConfigValue = number | string | boolean;

interface IConfig {
  [key: string]: IConfigValue;
}

interface IProps {
  config: IConfig;
}

export const ConfigEditor = ({ config: externalConfig }: IProps) => {
  const [config, setConfig] = useState(externalConfig);

  const handleValueChange = (prop: string, value: IConfigValue) => {
    setConfig({ ...config, [prop]: value });
  };

  const generateRows = () =>
    Object.keys(config).map(key => (
      <ConfigEditorRow
        key={key}
        prop={key}
        value={config[key]}
        onValueChange={handleValueChange}
      />
    ));

  return (
    <div className="config-editor">
      <Grid columns={2} divided="vertically">
        {generateRows()}
      </Grid>
    </div>
  );
};
