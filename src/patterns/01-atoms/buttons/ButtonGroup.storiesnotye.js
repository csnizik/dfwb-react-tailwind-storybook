import React from 'react';

import ButtonComponent from './Button';

import * as ButtonStories from './Button.stories';

export default {
    title: 'ButtonComponent',
    component: ButtonComponent
};
const Template = (args) => <ButtonComponent {...args} />;

export const Pair = Template.bind({});
Pair.args = {
    buttons: [{ ...ButtonStories.Primary }, { ...ButtonStories.Secondary.args }],
    orientation: 'horizontal'
}