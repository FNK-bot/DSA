class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(elemet) {
        this.items[this.rear] = elemet;
        this.rear++;
    };

    dequeue() {
        let elemet = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return elemet
    }

    isEmpty() {
        return this.rear - this.front == 0;
    }

    getSize() {
        return this.rear - this.front
    }

    print() {
        if (this.isEmpty()) {
            return console.log('[]')
        }
        // console.log(Object.values(this.items))
        let res = []
        for (let key in this.items) {
            res.push(this.items[key])
        };
        console.log(res)
    }

};

let myQueue = new Queue();

console.log(myQueue.isEmpty())
console.log(myQueue.getSize())
console.log(myQueue.enqueue(5))
console.log(myQueue.print())
console.log(myQueue.dequeue())
console.log(myQueue.print())
console.log(myQueue.isEmpty())
console.log(myQueue.getSize())
console.log(myQueue.enqueue(5))
console.log(myQueue.print())