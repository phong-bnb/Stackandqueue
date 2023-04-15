import {Stack} from "./Stack";
import {Queue} from "./Queue";
let stack = new Stack()
// @ts-ignore
let queue = new Queue()

stack.pushData(1)
stack.pushData(2)
stack.pushData(3)
stack.pushData(4)
stack.pushData(5)
stack.pushData(5)
stack.pushData(4)
stack.pushData(3)
stack.pushData(2)
stack.pushData(1)


queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)



stack.readdata()
console.log(stack)




console.log(stack)
stack.readdata()
console.log(stack)
// cách khác: 
export class Stack<T> {
    stackList: T[] = [];
    constructor() {}

    push(item: T) {
        // Push một phần tử
        return this.stackList.push(item);
    }

    arrayPush(arr: T[]) {
        // Push một Array
        arr.forEach((item) => {
            this.push(item);
        });
        return this.stackList;
    }

    pop() {
        return this.stackList.pop();
    }

    show() {
        return this.stackList;
    }
}

export class Queue<T> {
    queueList: T[] = [];
    constructor() {}

    enqueue(item: T) {
        return this.queueList.push(item);
    }

    enqueueArray(arr: T[]) {
        arr.forEach((item) => {
            this.enqueue(item);
        });
        return this.queueList;
    }

    dequeue() {
        return this.queueList.shift();
    }

    show() {
        return this.queueList;
    }
}

let arrTest = ["m", "a", "d", "a", "m"];
let demoStack = new Stack();
let demoQueue = new Queue();
demoStack.arrayPush(arrTest);
demoQueue.enqueueArray(arrTest);

function compareItems(a: any, b: any) {
    //Function so sánh stack & queue
    let functionCheck = false;
    for (let i = 0; i < a.show().length; i++) {
        if (a.pop() === b.dequeue()) {
            functionCheck = true;
        } else {
            functionCheck = false;
            break;
        }
    }
    if (functionCheck) {
        console.log(`This is a Palindrome string!`);
    } else {
        console.log(`This isn't a Palindrome string!`);
    }
}

compareItems(demoStack, demoQueue);


