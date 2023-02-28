import React from 'react';

import { action } from "@storybook/addon-actions";

import ProfileSeed from './ProfileSeed.tsx';

export default {
  title: 'Onboarding/ProfileSeed',
  component: ProfileSeed,
  parameters: {
    componentSubtitle: 'Displays the 24-word seed to the user and prompts to accept securing the seed',
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

const seed = 'hello world again potato tomato whisper galal cloud profile oscar eleven twelve thirteen amazing great hungry available option bamya lorem ipsum dictionary developer snapshot';

const Template = ({dir, inverted, ...props}) => {
  return (
    <ProfileSeed
      dir={dir}
      inverted={inverted}
      seed={seed}
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
