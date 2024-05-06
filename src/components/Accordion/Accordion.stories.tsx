import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import { Component, useState } from 'react';



const meta: Meta<typeof Accordion> = {
	component: Accordion,
};

// export default meta;


export default {
	component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
	return <Accordion titleValue='CollapsedAccordion' collapsed={true} onChange={callback} items={[{ title: '', value: '' }]} onClick={onClickCallback} />

}

export const UsersUnCollapsedMode = () => {
	return <Accordion
		titleValue='OpenedAccordion'
		collapsed={false} onChange={callback}
		items={[{ title: 'Serj', value: 1 }, { title: 'Aleks', value: 2 }, { title: 'Alina', value: 3 }]}
		onClick={onClickCallback}
	/>
}

export const ModeChanging = () => {
	const [collapsed, setCollapsed] = useState<boolean>(true)
	return <Accordion titleValue='AccordionDemo'
		collapsed={collapsed}
		onChange={() => { setCollapsed(!collapsed) }}
		items={[{ title: 'Serj', value: 1 }, { title: 'Aleks', value: 2 }, { title: 'Alina', value: 3 }]}
		onClick={onClickCallback}
	/>
}