// DIRECTED GRAPH OF FRIENDS AND FRIENDS OF FRIENDS
let graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function personIsSeller(name) {
	return name.slice(-1) === 'm';
}

function bfs(name) {
	let queue = [];
	queue = queue.concat(graph[name]);
	let searched = [];
	
//	console.log('bfs start:', graph, graph[name], queue, searched);
	
	while (queue.length > 0) {
		let person = queue.shift();
//		console.log(`Checking if ${person} is a mango seller`);
		if (!searched.includes(person)) {
			if (personIsSeller(person)) {
				console.log(`${person} is a mango seller!`);
				return true;
			} else {
				queue = queue.concat(graph[person]);
				searched.push(person);
			}
		}
	}
	
	return false;
}

console.log(bfs('you'));