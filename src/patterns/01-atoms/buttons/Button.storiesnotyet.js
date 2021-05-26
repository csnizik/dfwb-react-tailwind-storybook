import React from 'react';
import ButtonComponent from './Button';


const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = { background: '#ff0', label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: 'Yo' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: 'Ho ho ho' };