import React, { useEffect, useState } from "react";
import { InputFieldText } from "./InputField";

function General() {
	const [generalInfo, setGeneralInfo] = useState({
		name: { data: "", editing: true },
		title: { data: "", editing: true },
		birth: { data: "", editing: true },
		cel: { data: "", editing: true },
		email: { data: "", editing: true },
		country: { data: "", editing: true },
		city: { data: "", editing: true },
		address: { data: "", editing: true },
		profile: { data: "", editing: true },
	});

	function setInfo(e) {
		const userInput = e.target.value;
		const prop = e.target.id;
		setGeneralInfo((generalInfo) => ({
			...generalInfo,
			[prop]: { ...generalInfo[prop], data: userInput },
		}));
	}

	function saveEditInput(e) {
		const prop = e.target.parentNode.firstChild.id;
		const editState = generalInfo[prop].editing;
		setGeneralInfo((generalInfo) => ({
			...generalInfo,
			[prop]: { ...generalInfo[prop], editing: editState ? false : true },
		}));
	}

	return (
		<div>
			<h1>
				<InputFieldText
					value={generalInfo.name}
					id="name"
					placeholder="Your Name..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
			</h1>
			<h2>
				<InputFieldText
					id="title"
					placeholder="Rol..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
			</h2>
			<div id="profileContainer">
				<h3>
					<i className="fas fa-user-circle"> Profile</i>
				</h3>
				<InputFieldText
					id="profile"
					placeholder="Introduce yourself..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
			</div>
			<div id="detailsContainer">
				<InputFieldText
					type="text"
					id="birth"
					placeholder="Birth..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					onFocus={(e) => (e.target.type = "date")}
					state={generalInfo}
				></InputFieldText>
				<InputFieldText
					type="number"
					id="cel"
					placeholder="Celphone Number..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
				<InputFieldText
					type="text"
					id="country"
					placeholder="Country..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
				<InputFieldText
					type="text"
					id="city"
					placeholder="City..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
				<InputFieldText
					type="text"
					id="address"
					placeholder="Address..."
					setInfo={setInfo}
					saveEditInput={saveEditInput}
					state={generalInfo}
				></InputFieldText>
			</div>
		</div>
	);
}

export default General;
