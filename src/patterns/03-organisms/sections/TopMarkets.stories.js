import React from 'react';
import TopMarketsComponent from './TopMarkets';

export default {
  title: '03-organisms/Sections/Top Markets',
  component: TopMarketsComponent
};

const Template = (args) => <TopMarketsComponent {...args} />;

export const TopMarkets = Template.bind({});
TopMarkets.parameters = {
  controls: { hideNoControlsWarning: true },
};
