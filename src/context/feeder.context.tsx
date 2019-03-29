import React, { useState, useContext, useEffect, useRef } from "react"
import { Feeder } from "../lib/feeder";
import { ConfigContext } from "./config.context";

// export const ConfigContext = React.createContext(defaultConfig)
export const FeederContext = React.createContext<Feeder | null>(null)

const feederInstance = new Feeder()

export const FeederProvider = ({children}: {children: any}) => {
    const config = useContext(ConfigContext);
    const feeder = useRef(feederInstance)
    console.log("feeder provider render");
    
    useEffect(() => {
        console.log("feeder provider useEffect");
        feeder.current.setConfig(config.config)
    }, [config])

    return (
        <FeederContext.Provider value={feeder.current}>
            {children}
        </FeederContext.Provider>
    )
}
