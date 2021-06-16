import React from "react";

function InputFieldText(props) {
	const {
		type,
		onFocus,
		id,
		placeholder,
		setInfo,
		saveEditInput,
		state: {
			[id]: { data, editing },
		},
	} = props;

	let content;
	let icon;

	if (editing) {
		content = (
			<input
				type={type}
				onFocus={onFocus}
				id={id}
				placeholder={placeholder}
				onChange={setInfo}
				value={data}
			></input>
		);
		icon = (
			<i className="fas fa-save" style={{ pointerEvents: "none" }}></i>
		);
	} else if (!editing) {
		content = <div id={id}>{data}</div>;
		icon = (
			<i className="far fa-edit" style={{ pointerEvents: "none" }}></i>
		);
	}

	return (
		<div>
			{content}
			{
				<button type="button" onClick={saveEditInput}>
					{icon}
				</button>
			}
		</div>
	);
}

export default InputFieldText;
