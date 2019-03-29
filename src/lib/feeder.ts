import { IConfig } from "../context/config.context";

export class Feeder {
    timer?: number = undefined
    interval: number = 1000
    running: boolean = false

    start = () => {
        if (!this.running) {
            this.timer = window.setInterval(this.tick, this.interval)
            this.running = true;
        }
    }

    stop = () => {
        if (this.running) {
            window.clearInterval(this.timer)
            this.running = false;
        }
    }

    tick = () => {
        console.log(Math.random())
    }

    setConfig = (config: IConfig) => {
        this.interval = config.HORIZONTAL_GAP as number
        if (this.running) {
            this.stop()
            this.start()
        }
    }
}
