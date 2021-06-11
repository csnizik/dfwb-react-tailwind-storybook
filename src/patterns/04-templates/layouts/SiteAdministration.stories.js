import React from 'react';
import SiteAdministrationComponent from './SiteAdministration';

export default {
  title: '04-templates/Layouts/Site Administration',
  component: SiteAdministrationComponent,
};

const Template = (args) => <SiteAdministrationComponent {...args} />;

export const SiteAdministration = Template.bind({});
SiteAdministration.parameters = {
  controls: { hideNoControlsWarning: true },
};
