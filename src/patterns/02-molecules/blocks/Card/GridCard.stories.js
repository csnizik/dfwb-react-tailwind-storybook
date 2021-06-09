import React from 'react';
import {GridCard as GridCardComponent } from './index'

export default {
  title: '02-molecules/Card/Grid Card',
  component: GridCardComponent,
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: ['1/3', '2/3', 'full'],
      },
    },
  },
};

const Template = (args) => {
  return (
      <GridCardComponent {...args} />
  );
};

export const GridCard = Template.bind({});

GridCard.parameters = {
  controls: { hideNoControlsWarning: true },
};
GridCard.args = {
  width: '2/3',
};
