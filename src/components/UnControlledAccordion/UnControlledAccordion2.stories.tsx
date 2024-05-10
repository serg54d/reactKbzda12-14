import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { UnControlledAccordion2 } from './UnControlledAccordion2';
import { Component, useState } from 'react';



const meta: Meta<typeof UnControlledAccordion2> = {
	component: UnControlledAccordion2,
};

// export default meta;


export default {
	component: UnControlledAccordion2
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const UnControlledAccordionDemo = () => {
	return <UnControlledAccordion2 titleValue='Menu' />

}



