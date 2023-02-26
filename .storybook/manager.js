import { addons } from '@storybook/addons';

import '@storybook/addon-actions/register';

import theme from './theme';

addons.setConfig({
  theme: theme,
});
