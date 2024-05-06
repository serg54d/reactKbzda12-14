import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from './Select';
import { Component, useState } from 'react';



const meta: Meta<typeof Select> = {
	component: Select,
};

// export default meta;


export default {
	component: Select
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const SelectDemo = () => {
	let [collapsedValue, setcollapsedValue] = useState(false)
	return (
		<Select
			collapsed={collapsedValue}
			items={[{ title: 'Voronezh', value: 1 }, { title: 'Moscow', value: 2 }, { title: 'Tokio', value: 3 }]}
			onClick={callback}
			onChange={() => setcollapsedValue(true)}
			// onBlur={onClickCallback}
		/>
	)

}

