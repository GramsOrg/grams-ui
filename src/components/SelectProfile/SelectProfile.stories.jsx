import React from 'react';

import { action } from "@storybook/addon-actions";

import SelectProfile from './SelectProfile.tsx';

export default {
  title: 'Auth/SelectProfile',
  component: SelectProfile,
  parameters: {
    componentSubtitle: 'Displays a list of profiles with an option to create a new profile',
    storyshots: { disable: false },
  },
  argTypes: {
    horizontal: {
      control: 'boolean'
    }
  }
};

const Template = ({ ...props }) => {
  return (
    <SelectProfile
      {...props}
      onCreate={action("Trigger onCreate()")}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
}

const profiles = [
  {
    id: "first",
    name: "Elliot",
    avatarUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
  }, {
    id: "second",
    name: "Jenny",
    isDeveloper: true,
    avatarUrl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
  }
]

export const Populated = Template.bind({});
Populated.args = {
  profiles: profiles,
  onSelect: action("Trigger onSelect()")
}

export const Horizontal = Template.bind({});
Horizontal.args = {
  horizontal: true,
  profiles: profiles,
  onSelect: action("Trigger onSelect()")
}
