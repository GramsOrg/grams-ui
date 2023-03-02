import React from 'react';

import { action } from "@storybook/addon-actions";

import SelectionList from './SelectionList.tsx';

export default {
  title: 'General/SelectionList',
  component: SelectionList,
  parameters: {
    componentSubtitle: 'A configurable selection list component with icons and labels.',
    storyshots: { disable: false },
  }
};

const Template = ({ ...props }) => {
  return (
    <SelectionList
      onSelect={action("Trigger onSelect()")}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [{
    id: 'first',
    title: 'Hello',
    description: 'Hello',
    icon: 'child',
    color: 'black'
  }, {
    id: 'second',
    title: 'World',
    description: 'World',
    icon: 'world',
    color: 'black'
  }]
}
