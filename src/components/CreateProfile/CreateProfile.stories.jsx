import React from 'react';

import { action } from "@storybook/addon-actions";

import CreateProfile from './CreateProfile.tsx';

export default {
  title: 'Onboarding/CreateProfile',
  component: CreateProfile,
  parameters: {
    componentSubtitle: 'Displays a form for the user to create their profile',
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
    <CreateProfile
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
