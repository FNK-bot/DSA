class DllNode {
    constructor(data) {
        this.next = null;
        this.data = data;
        this.prev = null;
    }
}
function reverseDDL(head) {
    let temp = null;
    let curr = head;
    while (curr) {
        temp = curr.prev;
        curr.prev = curr.next
        curr.next = temp;

        curr = curr.prev
    };
    if (temp) head = temp.prev;

    return head

};

function RDLL(node) {
    if (node == null) {
        return null
    }

    let temp = node.prev;
    node.prev = node.next;
    node.next = temp

    if (node.prev == null) {
        return node
    }

    return RDLL(node.prev)
}


function print(head) {
    let curr = head
    let result = [];
    while (curr) {
        result.push(curr.data)
        curr = curr.next
    }
    console.log(result)
}



let firstNode = new DllNode(1)
let secondNode = new DllNode(2)
let thirdNode = new DllNode(3)

let head = firstNode;
firstNode.next = secondNode
secondNode.prev = firstNode
secondNode.next = thirdNode
thirdNode.prev = secondNode
print(head)//[ 1, 2, 3 ]

head = reverseDDL(head)
print(head)

head = RDLL(head)
print(head)