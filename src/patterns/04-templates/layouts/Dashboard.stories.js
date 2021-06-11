import React from 'react';
import DashboardComponent from './Dashboard';

export default {
  title: '04-templates/Layouts/Dashboard',
  component: DashboardComponent,
};

const Template = (args) => <DashboardComponent {...args} />;

export const Dashboard = Template.bind({});
Dashboard.parameters = {
  controls: { hideNoControlsWarning: true },
};
