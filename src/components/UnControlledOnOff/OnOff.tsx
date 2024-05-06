import React, { useState } from 'react';

type PropsType = {
	onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {
	let [on, setOn] = useState(false)

	const onOffBLockStyle = {
		display: "flex",
		gap: "5px",
		alignItems: "center"
	}
	const onStyle = {
		width: "30px",
		height: "20px",
		border: "2px solid black",
		backgroundColor: on ? "green" : "white"
	}
	const offStyle = {
		width: "30px",
		height: "20px",
		border: "2px solid black",
		backgroundColor: on ? "white" : "red"
	}
	const indicatorStyle = {
		width: "10px",
		height: "10px",
		borderRadius: "50%",
		border: "2px solid black",
		backgroundColor: on ? "green" : "red"
	}

	const onCLicked = () => {
		setOn(true)
		props.onChange(true)
	}
	const offClicked = () => {
		setOn(false)
		props.onChange(false)
	}

	return (
		<div style={onOffBLockStyle}>
			<div style={onStyle} onClick={onCLicked}>On</div>
			<div style={offStyle} onClick={offClicked}>Off</div>
			<div style={indicatorStyle}></div>
		</div>
	)
}

