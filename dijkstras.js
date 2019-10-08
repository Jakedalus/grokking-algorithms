let graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph['a'] = {};
graph['a']['fin'] = 1;
graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;
graph['fin'] = {};

let costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

let parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

function findLowestCostNode(costs) {
	let lowestCost = Infinity;
	let lowestCostNode = null;
	
	for (let node in costs) {
		let cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}
	
	return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
	let cost = costs[node];
	let neighbors = graph[node];
	
	for (let n in neighbors) {
		let newCost = cost + neighbors[n];
		if (costs[n] > newCost) {
			costs[n] = newCost;
			parents[n] = node;
		}
	}
	processed.push(node);
	node = findLowestCostNode(costs);
}

console.log('graph:', graph);
console.log('costs:', costs);
console.log('parents:', parents);
console.log('processed:', processed);





