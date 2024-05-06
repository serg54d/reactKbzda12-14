import React, { useState } from 'react';

// type AccordionPropsType = {
// 	// titleValue: string;
// 	// collapsed: boolean;

// }

// type TitleType = {
// 	// title: string
// }



export function UnControlledAccordion() {
	console.log('Accordion rendering');

	let [collapsed, setCollapsed] = useState(true)
	return (
		<div>
			<h3 onClick={() => { (setCollapsed(!collapsed))  }}>Заголовок</h3>
			{/* <AccordionTitle onClick={() => { setCollapsed(false) }} /> */}
			{collapsed && <AccordionBody />}
		</div>

	)
	// if (props.collapsed === true) {
	// 	return (
	// 		<div>
	// 			<AccordionTitle title={props.titleValue} />
	// 		</div>
	// 	)
	// } else {
	// 	return (
	// 		<div>
	// 			<AccordionTitle title={props.titleValue} />
	// 			<AccordionBody />
	// 		</div>
	// 	)
	// }

}

function AccordionTitle() {
	return <h3>Заголовок</h3>
}

function AccordionBody() {
	return <div>
		Lorem ipsum dolor sit amet.
	</div>
}