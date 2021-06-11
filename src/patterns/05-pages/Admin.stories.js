import React from 'react';
import AdminComponent from './Admin';

export default {
  title: '05-pages/Admin',
  component: AdminComponent,
};

const Template = (args) => <AdminComponent {...args} />;

export const Admin = Template.bind({});
Admin.parameters = {
  controls: { hideNoControlsWarning: true },
};
