class DllNode {
    constructor(data) {
        this.data = data;
        this.next = null
        this.prev = null
    }
}

function reverseDLL(head) {
    let curr = head;
    let temp = null;
    while (curr) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp

        curr = curr.prev
    }

    if (temp != null) {
        head = temp.prev
    }
    return head
}

function print(head) {
    let curr = head;
    let res = []
    while (curr) {
        res.push(curr.data)
        curr = curr.next
    }
    console.log(res)


}

function recRev(head) {
    if (head == null) {
        return null
    }
    let temp = head.next;
    head.next = head.prev;
    head.prev = temp;
    if (head.prev == null) {
        return head
    }
    return recRev(head.prev)
}

let node1 = new DllNode(1)
let node2 = new DllNode(2)
let node3 = new DllNode(3)

let head = node1;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2

print(head)

head = recRev(head)

print(head)