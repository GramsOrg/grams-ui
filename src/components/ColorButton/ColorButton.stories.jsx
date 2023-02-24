import React from 'react';

import { action } from "@storybook/addon-actions";

import ColorButton from './ColorButton.tsx';

export default {
  title: 'ColorButton',
  component: ColorButton,
};

export const Default = () => <ColorButton color="blue" onClick={action("clicked")} />;

export const Red = () => <ColorButton color="red" onClick={action("clicked")} />;
