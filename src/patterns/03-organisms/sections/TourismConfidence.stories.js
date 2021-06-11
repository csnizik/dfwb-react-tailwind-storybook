import React from 'react';
import TourismConfidenceComponent from './TourismConfidence';

export default {
  title: '03-organisms/Sections/Tourism Confidence',
  component: TourismConfidenceComponent,
};

const Template = (args) => <TourismConfidenceComponent {...args} />;

export const TourismConfidence = Template.bind({});
TourismConfidence.parameters = {
  controls: { hideNoControlsWarning: true },
};
