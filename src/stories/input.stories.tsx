import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ChangeEvent, useRef, useState } from 'react';

export default {
	title: 'Input'
	// component: Accordion
}


export const UncontrolledInput = () => <input />

export const ControlledInputWithFixedValue = () => <input value='Hi!' />

export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('')
	const onChangeInputHadler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	return (
		<div>
			<input onChange={onChangeInputHadler} />
			{value}
		</div>


	)
}


export const GetValueOfUncontrolledInputByButtonPress = () => {
	const [value, setValue] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)

	const onClickButtonHandler = () => {
		const el = inputRef.current as HTMLInputElement
		setValue(el.value)
	}
	return (
		<div >
			<input ref={inputRef} /><button onClick={onClickButtonHandler}>save</button> actual value -{value}
		</div >
	)
}

export const ControlledInput = () => {
	const [parrentValue, setParrentValue] = useState('')

	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const actualValue = e.currentTarget.value
		setParrentValue(actualValue)
	}

	return (
		<div>
			<input value={parrentValue} onChange={onChangeInputHandler} />
		</div>
	)
}
export const ControlledCheckbox = () => {
	const [parrentValue, setParrentValue] = useState(false)

	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const actualValue = e.currentTarget.checked
		setParrentValue(actualValue)
	}
	return (
		<div>
			<input type='checkbox' checked={parrentValue} onChange={onChangeInputHandler} />
		</div>
	)
}
export const ControlledSelect = () => {
	const [parrentValue, setParrentValue] = useState<string | undefined>('1')

	const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const actualValue = e.currentTarget.value
		setParrentValue(actualValue)
	}
	return (
		<div>
			<select value={parrentValue} onChange={onChangeSelectHandler}>
				<option>none</option>
				<option value="1">Voronezh</option>
				<option value="2">Moscow</option>
				<option value="3">E-K</option>
			</select>
		</div>
	)
}