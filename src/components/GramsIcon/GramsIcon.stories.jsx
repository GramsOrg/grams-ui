import React from 'react';

import { action } from "@storybook/addon-actions";

import GramsIcon from './GramsIcon.tsx';

export default {
  title: 'General/GramsIcon',
  component: GramsIcon,
  parameters: {
    componentSubtitle: 'Component description',
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
    <GramsIcon
      dir={dir}
      inverted={inverted}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  dir: 'ltr',
  inverted: false,
  name: 'world'
}

export const RTL = Template.bind({});
RTL.args = {
  dir: 'rtl',
  inverted: false,
  name: 'user'
}
