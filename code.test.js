const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

function graph(nodes, edges) {
    let graph = {};
    for (let i = 0; i < nodes; i++) {
        graph[i] = {};
    }
    edges.forEach(([src, dest, weight]) => {
        graph[src][dest] = weight;
    });
    return graph;
}
const testCases = [
    {
        graph: graph(4, [
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
        graph: graph(1, []),
        sourceNode: 0,
        expected: { 0: 0 },
    },
    {
        graph: graph(4, []),
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
            passed = passed + 1;
        } else {
            console.error(`Test case ${index + 1}: Failed`);
            console.error(`Expected:`, expected);
            console.error(`Got:`, result);
        }
    });

    console.log(`${passed}/${testCases.length} tests passed.`);
}

run();
