import React from 'react';
import AtAGlanceComponent from './AtAGlance';

export default {
  title: '03-organisms/Sections/At A Glance',
  component: AtAGlanceComponent
};

const Template = (args) => <AtAGlanceComponent {...args} />;

export const AtAGlance = Template.bind({});
AtAGlance.parameters = {
  controls: { hideNoControlsWarning: true },
};
