import React, { useEffect, useState } from "react";
import EducationList from "./EducationList";

function Education() {
	const [education, setEducation] = useState({
		institution: "",
		title_: "",
		year__start: "",
		year__end: "",
		description_: "",
	});

	const [creatingEducation, setCreatingEducation] = useState(true);
	const [educationArray, setEducationArray] = useState([]);

	//create skills set

	function addEducation() {
		setCreatingEducation({
			creatingEducation: true,
		});
	}

	function setEducationData(e) {
		const userInput = e.target.value;
		const prop = e.target.id;
		setEducation({ ...education, [prop]: userInput });
	}

	function saveEducation() {
		setEducationArray([...educationArray, education]);
	}

	useEffect(() => {
		clearEducation();
		if (educationArray == 0) addEducation();
	}, [educationArray]);

	function removeEducation(e) {
		const toRemove = e.target.parentNode.id;
		if (educationArray.length === 1) {
			setCreatingEducation(true);
		}

		setEducationArray(
			educationArray.filter((element, index) => index != toRemove)
		);
	}

	function clearEducation() {
		setEducation({
			institution: "",
			title: "",
			year_start: "",
			year_end: "",
			description: "",
		});
		setCreatingEducation(false);
	}

	return (
		<div>
			<h3>
				<i className="fas fa-pen-square"> Education</i>
			</h3>
			<ul id="educationList">
				<EducationList
					educationArray={educationArray}
					saveEducation={saveEducation}
					removeEducation={removeEducation}
					creatingEducation={creatingEducation}
					setEducationData={setEducationData}
					section="education"
					educationValues={education}
				></EducationList>
			</ul>
			{creatingEducation === false && (
				<button onClick={addEducation}>
					<i className="fas fa-plus"></i>
				</button>
			)}
		</div>
	);
}

export default Education;
