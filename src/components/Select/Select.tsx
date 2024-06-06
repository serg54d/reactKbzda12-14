import React, { useState, KeyboardEvent, useEffect } from 'react';
import s from './Select.module.css'
type SelectPropsType = {
	items: ItemType[]
	onChange: (value: any) => void
	value?: any
}

type ItemType = {
	country?: string
	title: string
	value: any
	population?: number
}

const NewMessageCounter = (props: { count: number }) => {
	return <div>{props.count}</div>
}

export function Select(props: SelectPropsType) {

	// console.log('ITEMS')
	const SelectItems = (props: { items: ItemType[] }) => {
		console.log('ITEMS')
		debugger
		return (
			<div>
				{props.items.map(i =>
					<div
						onMouseEnter={() => { setHoveredElementValue(i.value) }}
						className={`${s.item} ${hoverdItem === i ? s.selected : ''} `}
						onClick={() => { onItemClick(i.value) }}
						key={i.value}
					>
						{i.title}
					</div>)
				}
			</div>
		)
	}

	const Items = React.memo(SelectItems)

	const [active, setActive] = useState(false)
	const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
	let [counter, setCounter] = useState(0)

	const selectedItem = props.items.find(i => i.value === props.value)
	const hoverdItem = props.items.find(i => i.value === hoveredElementValue)

	useEffect(() => {
		setHoveredElementValue(props.value)
	}, [props.value])


	const toggleItems = () => setActive(!active)
	const onItemClick = (value: any) => {
		props.onChange(value);
		toggleItems()
	}



	const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
		// console.log('press');
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			for (let i = 0; i < props.items.length; i++) {
				if (props.items[i].value === hoveredElementValue) {
					const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
					if (pretendentElement) {
						props.onChange(pretendentElement.value);
						return
					}
				}
			}
			if (!selectedItem) {
				props.onChange(props.items[0].value);
			}

		}

		if (e.key === 'Enter' || e.key === 'Escape') {
			setActive(false)
		}
	}
	
	console.log('Select ')
	return (
		<div onKeyUp={onKeyUp} tabIndex={0} >
			<button onClick={() => setCounter(++counter)}>+</button>
			<NewMessageCounter count={counter} />
			<h3 className={s.selectTitle} onClick={toggleItems} style={{ color: 'red' }}>{selectedItem && selectedItem.title}</h3>
			{
				active &&
				<div className={s.items}>
					<Items items={props.items} />
				</div>
			}
		</div>
	)
}
