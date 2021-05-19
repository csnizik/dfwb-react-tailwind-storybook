import React from 'react';
import Logo from './Logo';

export default {
  title: 'Application/Component Library/Logo',
  component: Logo,
  argTypes: {
      size: {
          control: {
              type: 'inline-radio',
              options: ['xl', 'lg', 'md', 'sm']
          },
      },
      color: {
          control: {
              type: 'inline-radio',
              options: ['Sea Foam Teal (Primary)','Navy Sky','Whitewash White','Black']
          }
      }
  }
}

const Template = (args) => <Logo {...args}/>

export const Default = Template.bind({})
Default.args = {
    size: 'lg',
    color: 'Sea Foam Teal (Primary)'
}