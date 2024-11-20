class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}




function forwardTraversal(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next
    };
    console.log(result);
};

function backwardTraversal(tail) {
    let current = tail;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.prev
    };
    console.log(result);
}

function length(head) {
    let current = head;
    let count = 0;
    while (current) {
        count++
        current = current.next
    };
    return count;
}

function insertAtBegning(head, data) {
    let newNode = new Node(data);

    newNode.next = head;
    if (head != null) {
        head.prev = newNode
    }
    return newNode;

};

function insertAtEnd(head, data) {

    let newNode = new Node(data)
    if (head == null) {
        return newNode;
    }

    let curr = head
    while (curr.next != null) {
        curr = curr.next
    }

    curr.next = newNode;
    newNode.prev = curr
    return head

}

function insertAtPosition(head, pos, data) {
    let newNode = new Node(data)
    if (pos == 1) {
        newNode.next = head
        if (head != null) {
            head.prev = newNode
        }
        head = newNode
        return head
    }
    let curr = head

    for (let i = 1; i < pos - 1 && curr != null; ++i) {
        curr = curr.next
    }

    if (curr == null) {
        return 'invalid pos';
    }

    newNode.next = curr.next;
    if (curr.next != null) {
        curr.next.prev = newNode
    }
    curr.next = newNode
    newNode.prev = curr

    return head

}

function deleteAtBeg(head) {
    if (head == null) {
        return null;
    }

    // let temp = head;

    head = head.next
    if (head != null) {
        head.prev = null
    }

    return head
}

function deleteAtEnd(head) {
    if (head == null) return null;
    if (head.next == null) {
        return null
    }

    let curr = head;
    while (curr.next) {
        curr = curr.next
    }
    // console.log(curr)
    if (curr.prev != null) {
        curr.prev.next = null
    }
    return head

}
function deleteAtPos(head, pos) {
    if (head == null) {
        return null
    }
    let curr = head
    for (let i = 1; i < pos && curr; i++) {
        curr = curr.next
    }

    if (curr.prev) {
        curr.prev.next = curr.next
    }
    if (curr.next) {
        curr.next.prev = curr.prev
    }
    if (curr == head) {
        return curr.next
    }
}



//check
let firstNode = new Node(50);
let secondNode = new Node(40);
let thirdNode = new Node(30);

let head = firstNode;

head.next = secondNode;
secondNode.prev = head;
secondNode.next = thirdNode;
thirdNode.prev = secondNode;

// console.log(head)

backwardTraversal(thirdNode);
console.log(length(head))

head = insertAtBegning(head, 45)
forwardTraversal(head)
head = insertAtEnd(head, 15)
forwardTraversal(head)

head = insertAtPosition(head, 4, 50);
forwardTraversal(head)

head = deleteAtBeg(head)
forwardTraversal(head)

head = deleteAtEnd(head)
forwardTraversal(head)

head = deleteAtPos(head, 1)
forwardTraversal(head)