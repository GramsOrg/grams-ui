// component.tsx
exports.component = name => `import React from 'react';

import './${name}.css';
import { DefaultTheme, Theme } from '../../types/Theme';

export interface I${name}Props {
  theme?: Theme;
}

const ${name} = (props: I${name}Props) => {
  props = {
    theme: DefaultTheme,
    // set defaults here
    ...props
  }

  return (
    <>
    </>
  );
};

export default ${name};
`;

// component.stories.jsx
exports.story = name => `import React from 'react';

import { action } from "@storybook/addon-actions";

import { Mode } from '../../types/Theme';

import ${name} from './${name}.tsx';

export default {
  title: 'General/${name}',
  component: ${name},
  parameters: {
    componentSubtitle: 'Component description',
    storyshots: { disable: false },
  },
  argTypes: {
    theme: {
      control: false
    },
    dir: {
      control: 'radio',
      options: ['Left', 'Right']
    },
    mode: {
      control: 'radio',
      options: ['Light', 'Dark']
    }
  }
};

const Template = ({dir, mode, ...props}) => {
  return (
    <${name}
      theme={{
        dir: dir === 'Left' ? 'ltr': 'rtl',
        mode: mode === 'Light' ? Mode.Light : Mode.Dark
      }}
      {...props}
    />
  );
};

export const Default = () => <${name} />;

export const Sandbox = Template.bind({});
Sandbox.args = {
  dir: 'Left',
  mode: 'Light'
}
`;

// component.test.tsx
exports.test = name => `/**
* @jest-environment jsdom
*/

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import ${name} from './${name}';

describe('${name} Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;

// index.ts
exports.barrel = name => `import ${name} from './${name}';
export default ${name};
`;
