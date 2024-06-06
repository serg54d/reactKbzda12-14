import { action } from '@storybook/addon-actions';
import { useMemo, useState } from 'react';
import { Select } from '../components/Select/Select';

export default {
	title: 'Select',
	component: Select,
}
// console.log('Select ')
// const items = [
// 	{ title: 'Voronezh', value: 1, country: 'Russia', population: 1000000 },
// 	{ title: 'Moscow', value: 2, country: 'Russia', population: 10000001 },
// 	{ title: 'Tokio', value: 3, country: 'Japan', population: 100000000 }
// ]

export const WithUseMemo1 = () => { // города по фильтру страны

	const [value, setValue] = useState(1)
	const [items, setItems] = useState([
		{ title: 'Voronezh', value: 1, country: 'Russia', population: 1000000 },
		{ title: 'Moscow', value: 2, country: 'Russia', population: 10000001 },
		{ title: 'Tokio', value: 3, country: 'Japan', population: 100000000 }
	])

	const newItems = useMemo(() => {
		debugger
		const newItems = items.filter(i => i.country.toLowerCase() === 'russia')
		return newItems
	}, [items])

	const addNewItem = () => {
		const item = {
			title: `New Item ${new Date().getTime()}`,
			value: items.length + 1,
			country: 'Russia',
			population: 5000000
		};

		let newItems = [...items, item]; // keep the array reference

		setItems(newItems); // set state with the new reference
	};

	return <>
		<button onClick={addNewItem}>Add item</button>
		<Select onChange={setValue}
			value={value}
			items={newItems} />
	</>
}
export const WithUseMemo2 = () => { // города по фильтру содержание буквы 
	const [items, setItems] = useState([
		{ title: 'Voronezh', value: 1, country: 'Russia', population: 1000000 },
		{ title: 'Moscow', value: 2, country: 'Russia', population: 10000001 },
		{ title: 'Tokio', value: 3, country: 'Japan', population: 100000000 }
	])

	const newItems = useMemo(() => {
		const newItems = items.filter(i => i.title.toLowerCase().indexOf('z') > -1)
		return newItems
	}, [items])

	const [value, setValue] = useState(1)

	const addNewItem = () => {
		// create a new item
		const item = {
			title: `New Item ${new Date().getTime()}`,
			value: items.length + 1,
			country: 'Russia',
			population: 5000000
		};

		// add the new item to items
		setItems(items => [...items, item]);
	};
	return <>
		<button onClick={addNewItem}>Add item</button>
		<Select onChange={setValue}
			value={value}
			items={newItems} />
	</>


}

export const WithUseMemo3 = () => { // города с населением больше 10кк
	const [items, setItems] = useState([
		{ title: 'Voronezh', value: 1, country: 'Russia', population: 1000000 },
		{ title: 'Moscow', value: 2, country: 'Russia', population: 10000001 },
		{ title: 'Tokio', value: 3, country: 'Japan', population: 100000000 }
	])

	const addNewItem = () => {
		// create a new item
		const item = {
			title: `New Item ${new Date().getTime()}`,
			value: items.length + 1,
			country: 'Russia',
			population: 5000000
		};

		// add the new item to items
		setItems(items => [...items, item]);
	};

	const [value, setValue] = useState(1)
	const newItems = useMemo(() => {
		const newItems = items.filter(i => i.population > 10000000)
		return newItems
	}, [items])
	return <>
		<button onClick={addNewItem}>Add item</button>
		<Select onChange={setValue}
			value={value}
			items={newItems} />
	</>


}

// сделать счетчик
// города - массив объектов


