import React, { useReducer, useState } from 'react';
import { TOGGLE_COLLAPSED, reducer } from './reducer';

type AccordionPropsType = {
	titleValue: string;
	// collapsed: boolean;

}

type TitleType = {
	title: string
	onClick: () => void
}







export function UnControlledAccordion2(props: AccordionPropsType) {
	console.log('Accordion rendering');
	// let [collapsed, setCollapsed] = useState(false)
	let [state, dispatch] = useReducer(reducer, {collapsed: false})
	return (
		<div>
			{/* <AccordionTitle onClick={() => { setCollapsed(!collapsed) }} title={props.titleValue} /> */}
			<AccordionTitle onClick={() => { dispatch({ type: TOGGLE_COLLAPSED }) }} title={props.titleValue} />
			{/* <button onClick={() => { setCollapsed(!collapsed) }}>btn</button> */}
			{!state.collapsed && <AccordionBody />}
		</div>
	)
}

function AccordionTitle(props: TitleType) {
	return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
	return <ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
}