import React from 'react';
import { Card as CardComponent } from './index';

export default {
  title: '02-molecules/Card',
  component: CardComponent,
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: ['1/3', '2/3', 'full'],
      },
    },
    subheading: {
      type: 'string'
    }
  },
};

const Template = (args) => {
  return (
    <CardComponent {...args}><img src="http://placehold.it/550x272" /></CardComponent>
  );
};

export const Card = Template.bind({});

Card.parameters = {
  controls: { hideNoControlsWarning: true },
};
Card.args = {
  width: '2/3',
  subheading: 'Increased arrivals from key markets and increased visitor spend per market'
};
