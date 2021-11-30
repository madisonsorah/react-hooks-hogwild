import React from "react";
import Nav from "./Nav";
import PigList from "./PigList"
import hogs from "../porkers_data";
import {v4 as uuidv4} from 'uuid';

function App() {
	console.log(hogs);
	
	const hogsWithKeys = hogs.map((hog) => {
		hog.id = uuidv4();
		return hog;
	});

	return (
		<div className="App">
			<Nav />
			<PigList pigData={ hogsWithKeys } />
		</div>
	);
}

export default App;
