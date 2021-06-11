import React from 'react';
import ValueGapComponent from './ValueGap';

export default {
  title: '03-organisms/Sections/Value Gap',
  component: ValueGapComponent,
};

const Template = (args) => <ValueGapComponent {...args} />;

export const ValueGap = Template.bind({});
ValueGap.parameters = {
  controls: { hideNoControlsWarning: true },
};
