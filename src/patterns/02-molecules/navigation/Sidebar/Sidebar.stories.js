import React from 'react';
import SidebarComponent from './Sidebar';

export default {
    title: '02-molecules/Sidebar',
    component: SidebarComponent,
    argTypes: {
        sidebarOpen: {
            control: {
                type: 'inline-radio',
                options: [true, false]
            },
            description: 'Whether the sidebar is expanded or not (mobile and tablet viewports only)',
            defaultValue: 'true',
        },
    }
}

const Template = (args) => <SidebarComponent {...args} />;

export const Sidebar = Template.bind({});
Sidebar.args = {
    sidebarOpen: true
}
