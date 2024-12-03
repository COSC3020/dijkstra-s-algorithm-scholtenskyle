function dijkstra(graph, sourceNode) {
  let dist = {};
  let list = [];
  let fin = new Set();
  for (let node in graph) {
    if (node == sourceNode) {
      dist[node] = 0;
    } else {
      dist[node] = Infinity;
    }
    list.push(node);
  }
  while (list.length > 0) {
    list.sort(function (a, b) {
      return dist[a] - dist[b];
    });
    let node = list.shift();
    if (fin.has(node)) {
      continue;
    }
    if (dist[node] === Infinity) {
      break;
    }
    fin.add(node);
    for ([target, weight] of graph[node]) {
      if (fin.has(target)) {
        continue;
      }
      let pathCost = dist[node] + weight;
      if (pathCost < dist[target]) {
        dist[target] = pathCost;
      }
    }
  }
  return dist;
}
module.exports = dijkstra;
