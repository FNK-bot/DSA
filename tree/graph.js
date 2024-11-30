class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // Add an edge
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); // For undirected graph
    }

    // BFS traversal
    bfs(start) {
        const queue = [start];
        const visited = new Set();
        const result = [];

        visited.add(start);

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    // DFS traversal
    dfs(start) {
        const result = [];
        const visited = new Set();

        const dfsHelper = vertex => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(start);
        return result;
    }
}


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log("BFS:", graph.bfs("A"));
console.log("DFS:", graph.dfs("A"));
