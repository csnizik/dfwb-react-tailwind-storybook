import React from 'react';
import WaterAdventuresComponent from './WaterAdventures';

export default {
  title: '03-organisms/Sections/Water Adventures',
  component: WaterAdventuresComponent,
};

const Template = (args) => <WaterAdventuresComponent {...args} />;

export const WaterAdventures = Template.bind({});
WaterAdventures.parameters = {
  controls: { hideNoControlsWarning: true },
};
