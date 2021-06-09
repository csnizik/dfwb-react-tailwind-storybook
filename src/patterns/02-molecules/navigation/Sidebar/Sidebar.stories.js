import React from 'react';
import SidebarComponent from './Sidebar';

export default {
  title: '02-molecules',

  decorators: [
    (Story) => (
      <div style={{ margin: '-16px', background: '#E5E5E5' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <SidebarComponent {...args} />;

export const Sidebar = Template.bind({});
Sidebar.parameters = {
  controls: { hideNoControlsWarning: true },
};
