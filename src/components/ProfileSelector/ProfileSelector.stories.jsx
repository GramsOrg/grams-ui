import React from 'react';

import { action } from "@storybook/addon-actions";

import ProfileSelector from './ProfileSelector.tsx';

export default {
  title: 'Auth/ProfileSelector',
  component: ProfileSelector,
  parameters: {
    componentSubtitle: 'Displays a list of profiles with an option to create a new profile',
    storyshots: { disable: false },
  },
  argTypes: {
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl']
    }
  }
};

const Template = ({dir, ...props}) => {
  return (
    <ProfileSelector
      dir={dir}
      {...props}
      onCreate={action("Trigger onCreate()")}
    />
  );
};

export const Default = () => <ProfileSelector />;

export const Sandbox = Template.bind({});
Sandbox.args = {
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
  profiles: profiles
}
