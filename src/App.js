import React from "react";
import Education from "./components/EducationExperience/Education";
import Experience from "./components/EducationExperience/Experience";
import General from "./components/General/General";

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
