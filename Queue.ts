import {Stack} from "./Stack";

export class Queue {
    container: [] = []
    private data: number;

    constructor() {

    }

    enqueue(data: number) {
        // @ts-ignore
        this.container.push(data)
    }


    readdata() {
        let n = this.container.length / 2
        let arrnew1 = []
        while (this.container.length > n) {
            arrnew1.push(this.container.shift())

        }


    }
}
