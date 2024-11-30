class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert an element into the heap
    insert(value) {
        this.heap.push(value); // Add the value at the end
        this.bubbleUp();      // Reorganize the heap to maintain heap property
    }

    // Remove and return the minimum element
    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move the last element to the root
        this.bubbleDown();             // Reorganize the heap
        return min;
    }

    // Bubble up the last element to maintain heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Bubble down the root element to maintain heap property
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    // Get the minimum element
    getMin() {
        return this.heap[0] || null;
    }

    // Perform heap sort
    heapSort() {
        const result = [];
        while (this.heap.length) {
            result.push(this.remove());
        }
        return result;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    getMax() {
        return this.heap[0] || null;
    }

    heapSort() {
        const result = [];
        while (this.heap.length) {
            result.push(this.remove());
        }
        return result.reverse(); // Reverse for ascending order
    }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);
minHeap.insert(8);

console.log("Min-Heap:", minHeap.heap);
console.log("Minimum Element:", minHeap.getMin());

console.log("Heap Sort (Ascending Order):", minHeap.heapSort());


//max heap
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);
maxHeap.insert(8);

console.log("Max-Heap:", maxHeap.heap);
console.log("Maximum Element:", maxHeap.getMax());

console.log("Heap Sort (Descending Order):", maxHeap.heapSort());
