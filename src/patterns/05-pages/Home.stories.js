import React from 'react';
import HomeComponent from './Home';

export default {
  title: '05-pages/Home',
  component: HomeComponent,
};

const Template = (args) => <HomeComponent {...args} />;

export const Home = Template.bind({});
Home.parameters = {
  controls: { hideNoControlsWarning: true },
};
