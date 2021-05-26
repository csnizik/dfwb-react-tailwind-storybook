import React from 'react';
import MetricComponent from './Metric';

export default {
  title: '02-molecules/Metric',
  component: MetricComponent,
  argTypes: {
    trend: {
      control: {
        type: 'inline-radio',
        options: ['up', 'down', 'neutral'],
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    caption: {
      control: {
        type: 'text',
      },
    },
  },
  //   decorators: [
  //     (Story) => (
  //       <div style={{ margin: '3em' }}>
  //         <Story />
  //       </div>
  //     ),
  //   ],
};

const Template = (args) => <MetricComponent {...args} >{args.caption}</MetricComponent>;

export const Metric = Template.bind({});

Metric.parameters = {
  controls: { hideNoControlsWarning: true },
};

Metric.args = {
  trend: 'up',
  value: '12.7%',
  caption: 'Visa Spend Per Visitor',
};
