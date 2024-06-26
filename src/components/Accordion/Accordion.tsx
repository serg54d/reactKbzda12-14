import React from 'react';

type AccordionPropsType = {
	titleValue: string;
	collapsed: boolean;
	onChange: () => void
	items: ItemType[]
	onClick: (value: any) => void
}

type TitleType = {
	title: string
	onChange: () => void
}

type ItemType = {
	title: string
	value: any
}

type AccordionBodyPropsType = {
	items: ItemType[]
	onClick: (value: any) => void
}



export function Accordion(props: AccordionPropsType) {
	console.log('Accordion rendering');
	return (
		<div>
			<AccordionTitle title={props.titleValue} onChange={props.onChange} />
			{!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
		</div>
	)


}

function AccordionTitle(props: TitleType) {
	return <h3 onClick={(e) => props.onChange()}> {props.title}</h3 >
}

function AccordionBody(props: AccordionBodyPropsType) {
	return (
		<ul>
			{props.items.map((i, index) => <li key={index} onClick={() => { props.onClick(i.value) }}>{i.title}</li>)}
		</ul>
	)
}