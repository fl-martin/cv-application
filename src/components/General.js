import React, { Component } from "react";
import { InputFieldText } from "./InputField";

class General extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: { data: "", editing: true },
			title: { data: "", editing: true },
			birth: { data: "", editing: true },
			cel: { data: "", editing: true },
			email: { data: "", editing: true },
			country: { data: "", editing: true },
			city: { data: "", editing: true },
			address: { data: "", editing: true },
			profile: { data: "", editing: true },
		};
		this.setInfo = this.setInfo.bind(this);
		this.saveEditInput = this.saveEditInput.bind(this);
	}

	setInfo(e) {
		const userInput = e.target.value;
		const prop = e.target.id;
		this.setState({
			[prop]: { ...this.state[prop], data: userInput },
		});
	}

	saveEditInput(e) {
		const prop = e.target.parentNode.firstChild.id;
		const editState = this.state[prop].editing;
		this.setState({
			[prop]: { ...this.state[prop], editing: editState ? false : true },
		});
	}

	render() {
		return (
			<div>
				<h1>
					<InputFieldText
						id="name"
						placeholder="Your Name..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
				</h1>
				<h2>
					<InputFieldText
						id="title"
						placeholder="Rol..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
				</h2>
				<div id="profileContainer">
					<h3>
						<i className="fas fa-user-circle"> Profile</i>
					</h3>
					<InputFieldText
						id="profile"
						placeholder="Introduce yourself..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
				</div>
				<div id="detailsContainer">
					<InputFieldText
						type="text"
						id="birth"
						placeholder="Birth..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						onFocus={(e) => (e.target.type = "date")}
						state={this.state}
					></InputFieldText>
					<InputFieldText
						type="number"
						id="cel"
						placeholder="Celphone Number..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
					<InputFieldText
						type="text"
						id="country"
						placeholder="Country..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
					<InputFieldText
						type="text"
						id="city"
						placeholder="City..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
					<InputFieldText
						type="text"
						id="address"
						placeholder="Address..."
						setInfo={this.setInfo}
						saveEditInput={this.saveEditInput}
						state={this.state}
					></InputFieldText>
				</div>
			</div>
		);
	}
}

export default General;
