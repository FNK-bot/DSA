//Stack

class Stack {
    constructor() {
        this.items = []
    }

    getSize() {
        return this.items.length
    }

    push(elemet) {
        this.items.push(elemet)
    };

    pop() {
        if (this.getSize == 0) {
            return console.log('Underflow')
        }
        this.items.pop()
    }

    isEmpty() {
        return this.getSize() === 0;
    }
    peek() {
        if (this.getSize() == 0) {
            return console.log('Underflow')
        }
        console.log(this.items[this.getSize() - 1])
    }
    display() {
        console.log(this.items)
    }
}

let myStack = new Stack();

myStack.push(50);
myStack.push(51);
myStack.push(52);
myStack.display();
myStack.peek()
myStack.pop();
myStack.pop();
myStack.pop();
myStack.display()

myStack.peek()