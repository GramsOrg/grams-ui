import React from 'react';

import { action } from "@storybook/addon-actions";

import { Mode } from '../../types/Theme';

import ProfileSelector from './ProfileSelector.tsx';

export default {
  title: 'Auth/ProfileSelector',
  component: ProfileSelector,
  parameters: {
    componentSubtitle: 'Displays a list of profiles with an option to create a new profile',
    storyshots: { disable: false },
  },
  argTypes: {
    theme: {
      control: false
    },
    dir: {
      control: 'radio',
      options: ['Left', 'Right']
    },
    mode: {
      control: 'radio',
      options: ['Light', 'Dark']
    }
  }
};

const Template = ({dir, mode, ...props}) => {
  return (
    <ProfileSelector
      theme={{
        dir: dir === 'Left' ? 'ltr': 'rtl',
        mode: mode === 'Light' ? Mode.Light : Mode.Dark
      }}
      {...props}
      onCreate={action("Trigger onCreate()")}
    />
  );
};

export const Default = () => <ProfileSelector />;

export const Sandbox = Template.bind({});
Sandbox.args = {
  dir: 'Left',
  mode: 'Light'
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
  dir: 'Left',
  mode: 'Light',
  profiles: profiles
}
