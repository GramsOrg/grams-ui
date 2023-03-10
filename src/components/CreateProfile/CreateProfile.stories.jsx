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
    inverted: {
      control: 'boolean'
    }
  }
};

const Template = ({inverted, ...props}) => {
  return (
    <CreateProfile
      inverted={inverted}
      onCreate={action("Trigger onCreate()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  inverted: false
}
