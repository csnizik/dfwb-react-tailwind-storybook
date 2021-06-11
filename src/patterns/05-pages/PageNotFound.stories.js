import React from 'react';
import PageNotFoundComponent from './PageNotFound';

export default {
  title: '05-pages/Page Not Found',
  component: PageNotFoundComponent,
};

const Template = (args) => <PageNotFoundComponent {...args} />;

export const PageNotFound = Template.bind({});
PageNotFound.parameters = {
  controls: { hideNoControlsWarning: true },
};
