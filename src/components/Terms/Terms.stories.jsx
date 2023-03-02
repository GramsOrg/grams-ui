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
    inverted: {
      control: 'boolean'
    }
  }
};

const Template = ({inverted, ...props}) => {
  return (
    <Terms
      inverted={inverted}
      onAccept={action("Trigger onAccept()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  content: Content,
  inverted: false
}
