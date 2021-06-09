import React from 'react';
import LogoSvg from './Logo';

export default {
  title: '01-atoms/Logo',
  component: LogoSvg,
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
        type: 'inline-radio',
        options: [
          'Sea Foam Teal (Primary)',
          'Navy Sky',
          'Whitewash White',
          'Black',
        ],
      },
    },
  },
};

const Template = (args) => <LogoSvg {...args} />;

export const Logo = Template.bind({});
Logo.args = {
  size: 'Large',
  color: 'Sea Foam Teal (Primary)',
};
