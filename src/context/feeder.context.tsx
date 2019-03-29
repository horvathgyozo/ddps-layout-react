import React, { useState, useContext, useEffect } from "react"
import { Feeder } from "../lib/feeder";
import { ConfigContext } from "./config.context";

// export const ConfigContext = React.createContext(defaultConfig)
export const FeederContext = React.createContext<Feeder | null>(null)

export const FeederProvider = ({children}: {children: any}) => {
    const config = useContext(ConfigContext);
    const feeder = new Feeder()

    useEffect(() => {
        feeder.setConfig(config.config)
    }, [config])

    return (
        <FeederContext.Provider value={feeder}>
            {children}
        </FeederContext.Provider>
    )
}
