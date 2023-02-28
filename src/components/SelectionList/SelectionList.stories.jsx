import React from 'react';

import { action } from "@storybook/addon-actions";

import SelectionList from './SelectionList.tsx';

export default {
  title: 'General/SelectionList',
  component: SelectionList,
  parameters: {
    componentSubtitle: 'A configurable selection list component with icons and labels.',
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
    <SelectionList
      dir={dir}
      inverted={inverted}
      onSelect={action("Trigger onSelect()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  dir: 'ltr',
  inverted: false
}

const options = [
  {
    id: 'new',
    title: 'Create new profile',
    description: 'Start a new profile from scratch',
    icon: 'user plus',
    color: 'black'
  }, {
    id: 'import-backup',
    title: 'Import profile backup',
    description: 'Import a .grams backup file',
    icon: 'upload',
    color: 'black'
  }, {
    id: 'import-seed',
    title: 'Import profile seed',
    description: 'Import your profile using the 24-word seed',
    icon: 'pencil',
    color: 'black'
  }, {
    id: 'ledger',
    title: 'Use Ledger wallet',
    description: 'Pair Grams with your ledger wallet',
    icon: 'usb',
    color: 'black'
  }, 
]

export const CreateProfileOptions = Template.bind({});
CreateProfileOptions.args = {
  dir: 'ltr',
  inverted: false,
  options: options
}

export const RTL = Template.bind({});
RTL.args = {
  dir: 'rtl',
  inverted: false,
  options: options
}
