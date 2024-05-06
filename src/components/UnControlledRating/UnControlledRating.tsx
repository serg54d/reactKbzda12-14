import React, { useState } from 'react';


type RatingType = {
	// value: 0 | 1 | 2 | 3 | 4 | 5
}


export function UnControlledRating(props: RatingType) {
	console.log('Rating rendering');
	let [value, setValue] = useState(0)
	return (
		<div>
			<Star selected={value >= 1} setValue={() => setValue(1)} />
			<Star selected={value >= 2} setValue={() => setValue(2)} />
			<Star selected={value >= 3} setValue={() => setValue(3)} />
			<Star selected={value >= 4} setValue={() => setValue(4)} />
			<Star selected={value === 5} setValue={() => setValue(5)} />
		</div>
	)
}

type StarType = {
	selected: boolean
	setValue: () => void
	// value: 0 | 1 | 2 | 3 | 4 | 5
}

function Star(props: StarType) {
	console.log('Star rendering')
	// return props.selected ? <span><b>star-</b></span> : <span>star-</span>
	return <span onClick={props.setValue}>{props.selected ? <b>Star </b> : 'Star '}</span>
	// if (props.selected === true) {
	// 	return (
	// 		<span><b>star-</b></span>
	// 	)
	// } else return (
	// 	<span>star-</span>
	// )

}