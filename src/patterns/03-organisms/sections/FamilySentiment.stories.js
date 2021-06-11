import React from 'react';
import FamilySentimentComponent from './FamilySentiment';

export default {
  title: '03-organisms/Sections/Family Sentiment',
  component: FamilySentimentComponent
};

const Template = (args) => <FamilySentimentComponent {...args} />;

export const FamilySentiment = Template.bind({});
FamilySentiment.parameters = {
  controls: { hideNoControlsWarning: true },
};
