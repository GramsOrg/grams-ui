import React from 'react';

import { action } from "@storybook/addon-actions";

import CreateProfileOptions from './CreateProfileOptions.tsx';

export default {
  title: 'Onboarding/CreateProfileOptions',
  component: CreateProfileOptions,
  parameters: {
    componentSubtitle: 'Component description',
    storyshots: { disable: false },
  },
  argTypes: {
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl']
    },
    inverted: {
      control: 'boolean'
    }
  }
};

const Template = ({dir, inverted, ...props}) => {
  return (
    <CreateProfileOptions
      dir={dir}
      inverted={inverted}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  dir: 'ltr',
  inverted: false
}

export const RTL = Template.bind({});
RTL.args = {
  dir: 'rtl',
  inverted: false
}
