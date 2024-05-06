import React, { useState } from 'react';

type OnOffPropsType = {
	on: boolean
	setOn: (on: boolean) => void
}


export function ControlledOnOff(props: OnOffPropsType) {

	const onOffBLockStyle = {
		display: "flex",
		gap: "5px",
		alignItems: "center"
	}
	const onStyle = {
		width: "30px",
		height: "20px",
		border: "2px solid black",
		backgroundColor: props.on ? "green" : "white"
	}
	const offStyle = {
		width: "30px",
		height: "20px",
		border: "2px solid black",
		backgroundColor: props.on ? "white" : "red"
	}
	const indicatorStyle = {
		width: "10px",
		height: "10px",
		borderRadius: "50%",
		border: "2px solid black",
		backgroundColor: props.on ? "green" : "red"
	}
	return (
		<div style={onOffBLockStyle}>
			<div style={onStyle} onClick={() => props.setOn(true)}>On</div>
			<div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
			<div style={indicatorStyle}></div>
		</div>
	)
}

