import React from 'react';
import { Card as CardComponent } from './index';

export default {
  title: '02-molecules/Card/Card',
  component: CardComponent,
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: ['1/3', '2/3', 'full'],
      },
    },
    icon: {
      type: 'boolean',
    },
    heading: {
      type: 'string',
    },
    subheading: {
      type: 'string',
    },
  },
};

const Template = (args) => {
  return (
    <CardComponent {...args}>
      <img src="http://placehold.it/670x310"/>
    </CardComponent>
  );
};

export const Card = Template.bind({});

Card.parameters = {
  controls: { hideNoControlsWarning: true },
};
Card.args = {
  width: '2/3',
  heading: 'Top Markets',
  subheading:
    'Increased arrivals from key markets and increased visitor spend per market',
};
