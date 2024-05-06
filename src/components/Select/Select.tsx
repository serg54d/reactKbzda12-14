import React, { FocusEventHandler } from 'react';

type SelectPropsType = {
	items: ItemType[]
	onClick: (value: any) => void
	onChange: () => void
	// onBlur: () => void
	collapsed: boolean
}

type ItemType = {
	title: string
	value: any
}

export function Select(props: SelectPropsType) {
	return (
		<div>
			<div onClick={(e) => props.onChange()} >none</div>
			{props.collapsed && props.items.map(i => <div>{i.title}</div>)}
		</div>
	)


}
