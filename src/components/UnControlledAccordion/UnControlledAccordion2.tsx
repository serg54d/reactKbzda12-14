import React, { useState } from 'react';

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
	let [collapsed, setCollapsed] = useState(false)
	return (
		<div>
			<AccordionTitle onClick={()=> {setCollapsed(!collapsed)}} title={props.titleValue} />
			{/* <button onClick={() => { setCollapsed(!collapsed) }}>btn</button> */}
			{!collapsed && <AccordionBody />}
		</div>
	)
}

function AccordionTitle(props: TitleType) {
	return  <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
	return <div>
		Lorem ipsum dolor sit amet.
	</div>
}