import React, { useState } from "react"

import defaultConfig from "../config"

export interface IConfigContext {
    config: IConfig,
    setConfig: React.Dispatch<any>
}

export type IConfigValue = number | string | boolean;

export interface IConfig {
  [key: string]: IConfigValue;
}

// export const ConfigContext = React.createContext(defaultConfig)
export const ConfigContext = React.createContext<IConfigContext>({
    config: defaultConfig,
    setConfig: () => {}
})

export const ConfigProvider = ({children}: {children: any}) => {
    const [config, setConfig] = useState(defaultConfig)

    return (
        <ConfigContext.Provider value={{
            config,
            setConfig
        }}>
            {children}
        </ConfigContext.Provider>
    )
}
