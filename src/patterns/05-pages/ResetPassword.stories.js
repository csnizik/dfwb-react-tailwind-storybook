import React from 'react';
import ResetPasswordComponent from './ResetPassword';

export default {
  title: '05-pages/Reset Password',
  component: ResetPasswordComponent
};

const Template = (args) => <ResetPasswordComponent {...args} />;

export const ResetPassword = Template.bind({});
ResetPassword.parameters = {
  controls: { hideNoControlsWarning: true },
};
