// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// };

// class LinkedList {

//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size == 0
//     };

//     getSize() {
//         return this.size;
//     }

//     preappend(val) {// to add first
//         let node = new Node(val);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     append(val) {
//         if (this.isEmpty()) {
//             this.preappend(val)
//         } else {
//             let node = new Node(val)
//             let prev = this.head;
//             while (prev.next) {
//                 prev = prev.next;
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     delete(val) {
//         if (this.isEmpty()) {
//             return 'is empty'
//         };
//         if (this.head.val == val) {
//             this.head = this.head.next
//         }
//         let curr = this.head;
//         while (curr) {
//             if (curr.next.val == val) {
//                 curr.next = curr.next.next
//                 return true
//             }
//             curr = curr.next
//         }
//     }

//     search(val) {
//         let current = this.head;
//         while (current) {
//             if (current.val == val) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
//                 return true
//             }
//             current = current.next;
//         }
//         return false
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('empty list')
//         } else {

//             let curr = this.head;
//             let result = ''
//             while (curr) {
//                 result += `${curr.val} `;
//                 curr = curr.next;
//             }
//             console.log(result)
//         }

//     }
// };


// let list = new LinkedList();

// console.log(list.isEmpty())

// list.preappend(50);

// list.print();

// //Add array to linked list
// let arr = [1, 2, 3];
// for (i = 0; i < arr.length; i++) {
//     list.append(arr[i])
// };
// list.print()

// console.log(list.search(3))
// console.log(list.search(1))
// console.log(list.search(9))

// console.log(list.delete(1));
// list.print()


// const { format } = require("path");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
    /*this is for adding value at the begining of the list*/
    preappend(value) { //O(1)
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value) { //add item at last O(n)
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node

        }
        this.size++
    }

    findMiddle() {
        let fast = this.head;
        let slow = this.head;

        while (fast !== null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next
        }

        console.log(slow.value)
    }

    /* insert at given index o(n) */
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return console.log('Invalid Index')
        };

        if (index === 0) return this.preappend(value)

        let node = new Node(value);
        let prev = this.head;

        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        node.next = prev.next;
        prev.next = node;
        this.size++
    };

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }

            removedNode = prev.next;
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode
    }

    removeDuplicate() {
        let curr = this.head
        while (curr && curr.next) {
            if (curr.value == curr.next.value) {
                curr.next = curr.next.next
            }
            else {
                curr = curr.next
            }
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty')
        } else {
            let result = '';
            let current = this.head;
            while (current) {
                result += `${current.value} `
                current = current.next
            }
            console.log(result)
        }
    }
}

let list = new LinkedList();

console.log('is empty', list.isEmpty())
list.append(6)
list.append(9)
list.append(7)
list.print()
// list.preappend(5);
// list.preappend(9);
// list.print()
console.log('size', list.getSize())

list.insert(10, 1)
list.print()
list.insert(11, 2)
list.print()

list.removeFrom(1)
list.print()

list.removeFrom(0)
list.print()
console.log(list.getSize())



list.findMiddle()

list.append(5);
list.append(5);
list.print()
list.removeDuplicate()
list.print()