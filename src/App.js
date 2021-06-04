import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";

function App() {
	return (
		<div className="App">
			<General></General>
			<Experience></Experience>
			<Education></Education>
		</div>
	);
}

export default App;
