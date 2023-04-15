làm kiểuimport {Stack} from "./Stack";
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


