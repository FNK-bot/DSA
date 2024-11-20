//Stack

class Stack {
    constructor() {
        this.head = 0;
        this.stack = []
    }

    push(elemet) {
        this.stack[this.head] = elemet;
        this.head++
    }

    pop() {
        let elemet = this.stack[this.head];
        this.stack[this.head] = undefined;
        this.head--
        return elemet;
    };

    display() {
        console.log(this.stack)
    }
}

let myStack = new Stack();

myStack.push(50);
myStack.push(51);
myStack.push(52);
myStack.display();

myStack.pop();
myStack.display()