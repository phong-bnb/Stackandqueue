export class Stack{
    container: [] = []
    constructor() {
    }

    pushData(data: number){
        // @ts-ignore
        this.container.push(data)
    }
    readdata(){
let t = this.container.length/2
        let arrnew = []
        while (this.container.length > t){
    arrnew.push(this.container.pop())

        }


    }

}
