import React from 'react';
import IconSvg from './Icon';

export default {
  title: '01-atoms/Icon',
  component: IconSvg,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['Large', 'Medium', 'Small'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'Crystal-Clear Teal',
          'Sunny-Sky Blue',
          'Sunset Pink',
          'Sea Foam Teal',
          'Navy Sky',
          'Moss Green',
          'Dusty Rose',
          'Whitewash White',
          'Black',
        ],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'ArrowDown',
          'ArrowUp',
          'Dashboard',
          'Graph',
          'MagnifyingGlass',
          'Network',
          'Pencil',
          'Pie',
          'Pin',
          'Play',
          'Pointer',
          'SlideLeft',
          'SlideRight',
          'ThreeDots',
          'Video',
        ],
      },
    },
  },
};

const Template = (args) => <IconSvg {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  size: 'Medium',
  color: 'Crystal-Clear Teal',
  type: 'Network',
};
