let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

let stations = {};
stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

let finalStations = new Set([]);

while (statesNeeded.size > 0) {
	let bestStation = null;
	let statesCovered = new Set([]);

	for (let [station, statesForStation] of Object.entries(stations)) {
		let covered = new Set([...statesNeeded].filter(x => statesForStation.has(x)));
		console.log(station, statesForStation, covered);
		if (covered.size > statesCovered.size) {
			bestStation = station;
			statesCovered = covered;
		}
	}

	console.log(bestStation, statesCovered);
	finalStations.add(bestStation);
	statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
	
	console.log(finalStations, statesNeeded);
}