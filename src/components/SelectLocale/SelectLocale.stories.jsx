import React from 'react';

import { action } from "@storybook/addon-actions";

import SelectLocale from './SelectLocale.tsx';

export default {
  title: 'Onboarding/SelectLocale',
  component: SelectLocale,
  parameters: {
    componentSubtitle: 'Allows the user to select and confirm their locale',
    storyshots: { disable: false },
  },
  argTypes: {
    fluid: {
      control: 'boolean'
    }
  }
};

const Template = ({inverted, ...props}) => {
  return (
    <SelectLocale
      inverted={inverted}
      onChange={action("Trigger onChange()")}
      onSelect={action("Trigger onSelect()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  inverted: false
}
