import React from 'react';

import { action } from "@storybook/addon-actions";

import Onboarding from './Onboarding.tsx';

export default {
  title: 'Flows/Onboarding',
  component: Onboarding,
  parameters: {
    componentSubtitle: 'An end-to-end onboarding flow for creating a Grams profile',
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
    <Onboarding
      inverted={inverted}
      onCreate={action("Trigger onCreate()")}
      onImportBackup={action("Trigger onImportBackup()")}
      onImportSeed={action("Trigger onImportSeed()")}
      onLedger={action("Trigger onLedger()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  inverted: false
}
