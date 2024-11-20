class SllNode {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

function reverseSLL(head) {

    let prev = null;
    let curr = head;
    let next = null;

    while (curr) {
        next = curr.next; //next said for last null
        curr.next = prev; //null firsrt and go on
        prev = curr; // prev latest
        curr = next; // change until null 
    }
    return prev
}

function RSLL(node) {
    if (node == null) {
        return null
    }

    let prev = null;
    let curr = node
    let next = curr.next
    curr.next = prev;
    prev = curr
    curr = next
    if (prev == null) {
        return prev
    }
    RSLL(next)
}

function print(head) {
    let curr = head;
    let res = [];
    while (curr) {
        res.push(curr.data)
        curr = curr.next
    }
    console.log(res)
};



//check

let firstNode = new SllNode(1)
let secondNode = new SllNode(2)
let thirdNode = new SllNode(3)

let head = firstNode;
firstNode.next = secondNode
secondNode.next = thirdNode

print(head)//[ 1, 2, 3 ]

head = reverseSLL(head);
print(head) //[ 3, 2, 1 ]
print(head) // [ 1 ] -- why its only one how to fix this
