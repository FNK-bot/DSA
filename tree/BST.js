class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a node
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Check if the tree contains a value
    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    // Find the closest value to a given number
    findClosestValue(target) {
        let current = this.root;
        let closest = Infinity;

        while (current) {
            if (Math.abs(target - closest) > Math.abs(target - current.value)) {
                closest = current.value;
            }
            current = target < current.value ? current.left : current.right;
        }
        return closest;
    }

    // Validate if the tree is a BST
    validate(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) return false;

        return this.validate(node.left, min, node.value) &&
            this.validate(node.right, node.value, max);
    }

    // Inorder traversal
    inorder(node = this.root, result = []) {
        if (node) {
            this.inorder(node.left, result);
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return result;
    }

    // Preorder traversal
    preorder(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    // Postorder traversal
    postorder(node = this.root, result = []) {
        if (node) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(6);

console.log("Inorder Traversal:", bst.inorder());
console.log("Closest Value to 12:", bst.findClosestValue(12));
console.log("Is Valid BST:", bst.validate());
