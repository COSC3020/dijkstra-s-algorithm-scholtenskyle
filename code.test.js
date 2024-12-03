const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

function newGraph(nodes, edges) {
    let graph = {};
    for (let i = 0; i < nodes; i++) {
        graph[i] = {}; // Initialize an empty adjacency list for the node
    }
    edges.forEach(([src, dest, weight]) => {
        graph[src][dest] = weight; // Add edge to adjacency list
    });
    return graph;
}

const testCases = [
    {
        graph: newGraph(4, [
            [0, 1, 1],
            [0, 2, 4],
            [1, 2, 2],
            [1, 3, 5],
            [2, 3, 1],
        ]),
        sourceNode: 0,
        expected: { 0: 0, 1: 1, 2: 3, 3: 4 },
    },
    {
        graph: newGraph(1, []), // Single node
        sourceNode: 0,
        expected: { 0: 0 },
    },
    {
        graph: newGraph(4, []), // Disconnected graph
        sourceNode: 0,
        expected: { 0: 0, 1: Infinity, 2: Infinity, 3: Infinity },
    },
];

function run() {
    let passed = 0;
    testCases.forEach(({ graph, sourceNode, expected }, index) => {
        const result = dijkstra(graph, sourceNode);
        const match = Object.keys(expected).every(
            (node) => result[node] === expected[node]
        );
        if (match) {
            console.log(`Test case ${index + 1}: Passed`);
            passed++;
        } else {
            console.error(`Test case ${index + 1}: Failed`);
            console.error(`Expected:`, expected);
            console.error(`Got:`, result);
        }
    });
    console.log(`${passed}/${testCases.length} tests passed.`);
}

run();
