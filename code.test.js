const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

sourceNode = 0;
graph1 = {};
graph2 = { 0: [] };
graph3 = {
    0: [[1, 1]],
    1: [[0, 1]],
    2: [[3, 1]],
    3: [[2, 1]],
    4: []
};
graph4 = {
    0: [[1, 1], [2, 4]],
    1: [[2, 2], [0, 1]],
    2: [[0, 4], [1, 2]]
};
graph5 = {
    0: [[1, 5], [2, 2]],
    1: [[3, 4]],
    2: [[1, 1], [3, 7]],
    3: []
};
graph6 = {
    0: [[1, 1], [2, 2]],
    1: [[3, 3], [4, 2]],
    2: [],
    3: [],
    4: []
};
graph7 = {
    0: [[1, -1], [2, 4]],
    1: [[2, -2], [3, 3]],
    2: [[3, 5]],
    3: []
};

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
const tests = [
    { 
        func: dijkstra, 
        graph: graph1, 
        result: {},
        name: "Test 1" 
    },
    { 
        func: dijkstra, 
        graph: graph2, 
        result: {'0': 0},
        name: "Test 2" 
    },
    { 
        func: dijkstra, 
        graph: graph3, 
        result: {'0': 0, '1': 1, '2': Infinity, '3': Infinity, '4': Infinity},
        name: "Test 3" 
    },
    { 
        func: dijkstra, 
        graph: graph4, 
        result: {'0': 0, '1': 1, '2': 3},
        name: "Test 4" 
    },
    { 
        func: dijkstra, 
        graph: graph5, 
        result: {'0': 0, '1': 3, '2': 2, '3': 7},
        name: "Test 5" 
    },
    { 
        func: dijkstra, 
        graph: graph6, 
        result: {'0': 0, '1': 1, '2': 2, '3': 4, '4': 3},
        name: "Test 6" 
    },
    { 
        func: dijkstra, 
        graph: graph7, 
        result: {'0': 0, '1': -1, '2': -3, '3': 2},
        name: "Test 7" 
    }
];

tests.forEach(test => {
    const output = test.func(test.graph, sourceNode);
    if (arraysEqual(output, test.result)) {
        console.log(`${test.name} successful`);
    } else {
        console.error(`${test.name} failed: ${output} != ${test.result}`);
    }
});
