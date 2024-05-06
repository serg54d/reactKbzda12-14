import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
	value: RatingValueType
	onClick: (value: RatingValueType) => void
}


export function Rating(props: RatingType) {
	console.log('Rating rendering');
	return (
		<div>
			<Star selected={props.value >= 1} onClick={props.onClick} value={1} />
			<Star selected={props.value >= 2} onClick={props.onClick} value={2} />
			<Star selected={props.value >= 3} onClick={props.onClick} value={3} />
			<Star selected={props.value >= 4} onClick={props.onClick} value={4} />
			<Star selected={props.value === 5} onClick={props.onClick} value={5} />
		</div>
	)
}

type StarType = {
	selected: boolean
	onClick: (value: RatingValueType) => void
	value: RatingValueType
}

function Star(props: StarType) {
	console.log('Star rendering')
	return <span onClick={() => props.onClick(props.value)}>{props.selected ? <b>Star </b> : "Star "}</span>
	// if (props.selected === true) {
	// 	return (
	// 		<span><b>star-</b></span>
	// 	)
	// } else return (
	// 	<span>star-</span>
	// )

}