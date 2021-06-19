import React, { useState, useEffect } from "react";
import EmployList from "./EmployList";

function Experience() {
	const [employ, setEmploy] = useState({
		company: "",
		position: "",
		year_start: "",
		year_end: "",
		description: "",
	});

	const [creatingEmploy, setCreatingEmploy] = useState(true);
	const [employArray, setEmployArray] = useState([]);

	function addEmploy() {
		setCreatingEmploy(true);
	}

	function setEmployData(e) {
		const userInput = e.target.value;
		const prop = e.target.id;
		setEmploy({ ...employ, [prop]: userInput });
	}

	function saveEmploy() {
		setEmployArray([...employArray, employ]);
	}

	useEffect(() => {
		clearEmploy(); //Avoid this when removing item: comparing prevEmploy > employArray
		if (employArray.length == 0) addEmploy();
	}, [employArray]);

	function removeEmploy(e) {
		const toRemove = e.target.parentNode.id;
		if (employArray.length === 1) {
			setCreatingEmploy(true);
		}

		setEmployArray(
			employArray.filter((element, index) => index != toRemove)
		);
	}

	function clearEmploy() {
		setEmploy({
			company: "",
			position: "",
			year_start: "",
			year_end: "",
			description: "",
		});
		setCreatingEmploy(false);
	}

	return (
		<div>
			<h3>
				<i className="fas fa-briefcase"> Experience</i>
			</h3>
			<ul id="employList">
				<EmployList
					employArray={employArray}
					saveEmploy={saveEmploy}
					removeEmploy={removeEmploy}
					creatingEmploy={creatingEmploy}
					setEmployData={setEmployData}
					section="employ"
					employValues={employ}
				></EmployList>
			</ul>
			{creatingEmploy === false && (
				<button onClick={addEmploy}>
					<i className="fas fa-plus"></i>
				</button>
			)}
		</div>
	);
}

export default Experience;
