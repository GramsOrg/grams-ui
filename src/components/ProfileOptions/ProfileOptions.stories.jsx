import React from 'react';

import { action } from "@storybook/addon-actions";

import ProfileOptions from './ProfileOptions.tsx';

export default {
  title: 'Onboarding/ProfileOptions',
  component: ProfileOptions,
  parameters: {
    componentSubtitle: 'ProfileOptions is sugar for <SelectionList />',
    storyshots: { disable: false },
  }
};

const Template = ({ ...props }) => {
  return (
    <ProfileOptions
      onSelect={action("Trigger onSelect()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
}
