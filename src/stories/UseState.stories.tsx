import { action } from '@storybook/addon-actions';
import { useMemo, useState } from 'react';
import { Select } from '../components/Select/Select';

export default {
	title: 'useState demo',
}


function generateData() {
	// hard counting 
	console.log('generateData');
	return 34151515616
}

export const UseState = () => { // города по фильтру страны
	console.log('Example1');

	// const initValue = useMemo(generateData, [])

	const [counter, setCounter] = useState(generateData);




	return (
		<div>
			<button onClick={() => setCounter(state => state + 1)}
			>
				+
			</button>
			{counter}
		</div>
	)
}

