import { action } from '@storybook/addon-actions';
import { useEffect, useMemo, useState } from 'react';
import { Select } from '../components/Select/Select';

export default {
	title: 'useEffect demo',
}

export const SimpleExample = () => {
	const [fake, setFake] = useState(1);
	const [counter, setCounter] = useState(1);

	console.log('SimpleExample');

	useEffect(() => {
		console.log('useEffect every render');
		document.title = counter.toString()
		// api.getUsers().then(''
		// setInterval
		// indexedDB
		// document.getElementById
		// document.title = 'User '

	})
	useEffect(() => {
		console.log('useEffect only first render (componentDidMount)');
		document.title = counter.toString()
		// api.getUsers().then(''
		// setInterval
		// indexedDB
		// document.getElementById
		// document.title = 'User '

	}, [])
	useEffect(() => {
		console.log('useEffect first render and every counter change');
		document.title = counter.toString()
		// api.getUsers().then(''
		// setInterval
		// indexedDB
		// document.getElementById
		// document.title = 'User '

	}, [counter])


	return (
		<div>
			Hello, {counter} {fake}
			<button onClick={() => setFake(fake + 1)}>fake+</button>
			<button onClick={() => setCounter(counter + 1)}>counter+</button>
		</div>
	)
}

