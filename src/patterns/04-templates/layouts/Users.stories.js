import React from 'react';
import UsersComponent from './Users';

export default {
  title: '04-templates/Layouts/Users',
  component: UsersComponent
};

const Template = (args) => <UsersComponent {...args} />;

export const Users = Template.bind({});
Users.parameters = {
  controls: { hideNoControlsWarning: true },
};
