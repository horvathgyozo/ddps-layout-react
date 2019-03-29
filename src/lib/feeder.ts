import { IConfig } from "../context/config.context";

let id = 0;
export class Feeder {
    timer?: number = undefined
    interval: number = 1000
    running: boolean = false
    id: number = id

    constructor() {
        this.id = ++id
        console.log("feeder constructor", this.id);
    }

    start = () => {
        if (!this.running) {
            console.log("feeder start", this.id);
            
            this.timer = window.setInterval(this.tick, this.interval)
            this.running = true;
        }
    }
    
    stop = () => {
        if (this.running) {
            console.log("feeder stop", this.id);
            window.clearInterval(this.timer)
            this.running = false;
        }
    }

    tick = () => {
        console.log(Math.random())
    }

    setConfig = (config: IConfig) => {
        console.log("feeder config", this.id);
        console.log("feeder running", this.id, this.running);
        
        this.interval = config.HORIZONTAL_GAP as number
        if (this.running) {
            this.stop()
            this.start()
        }
    }
}
