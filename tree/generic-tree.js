// Define the Node class
class Node {
    constructor(value) {
        this.value = value;    // The value stored in the node
        this.children = [];    // Array to hold references to child nodes
    }
}

// Define the Tree class
class Tree {
    constructor() {
        this.root = null;   // The root of the tree, initially set to null
    }

    // Insert a node into the tree
    insert(value, parentValue = null) {
        const newNode = new Node(value);

        if (this.root === null) {
            // If no root exists, make this node the root
            this.root = newNode;
        } else {
            // Find the parent node where this new node will be attached
            const parent = this.findBFS(parentValue);
            if (parent) {
                parent.children.push(newNode);
            } else {
                console.log(`Parent node with value ${parentValue} not found.`);
            }
        }
    }

    // Find a node using Breadth-First Search (BFS)
    findBFS(value) {
        if (this.root === null) return null;

        const queue = [this.root];

        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode.value === value) {
                return currentNode;
            }
            // Add all children to the queue
            for (const child of currentNode.children) {
                queue.push(child);
            }
        }

        return null; // Return null if the node is not found
    }

    // Delete a node from the tree
    delete(value) {
        if (!this.root) {
            console.log('Tree is empty.');
            return;
        }

        if (this.root.value === value) {
            this.root = null; // If the root matches the value, clear the tree
            return;
        }

        const queue = [this.root];

        while (queue.length) {
            const currentNode = queue.shift();

            // Check the children of the current node
            for (let i = 0; i < currentNode.children.length; i++) {
                if (currentNode.children[i].value === value) {
                    currentNode.children.splice(i, 1); // Remove the child node
                    return;
                }
                queue.push(currentNode.children[i]);
            }
        }

        console.log(`Node with value ${value} not found.`);
    }

    // Calculate the height of the tree
    calculateHeight(node = this.root) {
        if (!node) return 0; // Base case: if the node is null, height is 0

        let maxChildHeight = 0;
        for (const child of node.children) {
            maxChildHeight = Math.max(maxChildHeight, this.calculateHeight(child));
        }

        return 1 + maxChildHeight; // Add 1 for the current node
    }

    // Count the total number of nodes in the tree
    countNodes(node = this.root) {
        if (!node) return 0; // Base case: if the node is null, count is 0

        let count = 1; // Count the current node
        for (const child of node.children) {
            count += this.countNodes(child); // Add the count of child nodes
        }

        return count;
    }

    // Print the tree using BFS
    printBFS() {
        if (!this.root) {
            console.log('Tree is empty.');
            return;
        }

        const queue = [this.root];
        while (queue.length) {
            const currentNode = queue.shift();
            console.log(currentNode.value);

            // Add all children to the queue for BFS
            for (const child of currentNode.children) {
                queue.push(child);
            }
        }
    }
}


// Create a new tree
const myTree = new Tree();

// Insert nodes into the tree
myTree.insert('Root');
myTree.insert('Child 1', 'Root');
myTree.insert('Child 2', 'Root');
myTree.insert('Child 3', 'Root');
myTree.insert('Grandchild 1', 'Child 1');
myTree.insert('Grandchild 2', 'Child 1');
myTree.insert('Grandchild 3', 'Child 2');

// Print the tree using BFS
console.log('Tree Structure (BFS):');
myTree.printBFS();

// Calculate the height of the tree
console.log('Height of the Tree:', myTree.calculateHeight());

// Count the total number of nodes in the tree
console.log('Total Nodes in the Tree:', myTree.countNodes());

// Delete a node
myTree.delete('Child 2');
console.log('After deleting "Child 2":');
myTree.printBFS();
console.log('Height of the Tree:', myTree.calculateHeight());
console.log('Total Nodes in the Tree:', myTree.countNodes());
