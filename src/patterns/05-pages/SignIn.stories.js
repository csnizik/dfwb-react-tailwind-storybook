import React from 'react';
import SignInComponent from './SignIn';

export default {
  title: '05-pages/Sign In',
  component: SignInComponent,
};

const Template = (args) => <SignInComponent {...args} />;

export const SignIn = Template.bind({});
SignIn.parameters = {
  controls: { hideNoControlsWarning: true },
};
