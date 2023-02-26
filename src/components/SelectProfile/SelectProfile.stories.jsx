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
    dir: {
      control: 'radio',
      defaultValue: 'ltr',
      options: ['ltr', 'rtl']
    },
    horizontal: {
      control: 'boolean'
    }
  }
};

const Template = ({dir, ...props}) => {
  return (
    <SelectProfile
      dir={dir}
      {...props}
      onCreate={action("Trigger onCreate()")}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  dir: 'ltr'
}

const profiles = [
  {
    id: "first",
    name: "Elliot",
    avatarUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
  }, {
    id: "second",
    name: "Jenny",
    avatarUrl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
  }
]

export const Populated = Template.bind({});
Populated.args = {
  dir: 'ltr',
  profiles: profiles,
  onSelect: action("Trigger onSelect()")
}

export const Horizontal = Template.bind({});
Horizontal.args = {
  dir: 'ltr',
  horizontal: true,
  profiles: profiles,
  onSelect: action("Trigger onSelect()")
}

export const RTL = Template.bind({});
RTL.args = {
  dir: 'rtl',
  horizontal: true,
  profiles: profiles,
  onSelect: action("Trigger onSelect()")
}
