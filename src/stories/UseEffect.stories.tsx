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

export const SetTimeoutExample = () => {


	

	const [fake, setFake] = useState(1);
	const [counter, setCounter] = useState(1);
	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [hours, setHours] = useState(0)
	console.log('SetTimeoutExample');

	

	useEffect(() => {
		// setTimeout(() => {
		// 	// debugger
		// 	console.log('setTimeout ');

		// 	document.title = counter.toString()
		// }, 1000)

		// setInterval(() => {
		// 	setCounter((state) => state + 1)
		// }, 1000)

		// setInterval(() => {
		// 	setSeconds(seconds)
		// }, 1000)

		// setInterval(() => {
		// 	setMinutes(minutes)
		// }, 60000)

		// setInterval(() => {
		// 	setMinutes(minutes)
		// }, 3600000)


		setInterval(() => {
			const dateTime = new Date()
			const hour = dateTime.getHours()
			const minute = dateTime.getMinutes()
			const second = dateTime.getSeconds()
			setSeconds(second);
			setMinutes(minute);
			setHours(hour);
		}, 1000);

	}, [])



	return (
		<div>
			{/* Hello, counter: {counter} fake: {fake} */}
			{hours}:{minutes}:{seconds}
			{/* <button onClick={() => setFake(fake + 1)}>fake+</button>
			<button onClick={() => setCounter(counter + 1)}>counter+</button> */}
		</div>
	)
}


