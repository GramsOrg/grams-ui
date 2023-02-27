import React from 'react';

import { action } from "@storybook/addon-actions";
import Content from './Terms.md';

import Terms from './Terms.tsx';

export default {
  title: 'Onboarding/Terms',
  component: Terms,
  parameters: {
    componentSubtitle: 'Displays and prompts the user to agree to the terms of use',
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
    <Terms
      dir={dir}
      inverted={inverted}
      onAccept={action("Trigger onAccept()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  dir: 'ltr',
  inverted: false
}

export const Populated = Template.bind({});
Populated.args = {
  dir: 'ltr',
  content: Content,
  inverted: false
}

export const RTL = Template.bind({});
RTL.args = {
  dir: 'rtl',
  content: Content,
  inverted: false
}
