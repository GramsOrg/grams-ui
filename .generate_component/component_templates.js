// component.tsx
exports.component = name => `import React from 'react';

import './${name}.css';

export interface I${name}Props {

  /**
   * Defines the direction of the component
   */
  dir?: string;

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;
}

const defaultProps = {
  dir: 'ltr',
  inverted: false
};

const ${name} = (props: I${name}Props) => {

  return (
    <>
    </>
  );
};

${name}.defaultProps = defaultProps;

export default ${name};
`;

// component.stories.jsx
exports.story = name => `import React from 'react';

import { action } from "@storybook/addon-actions";

import ${name} from './${name}.tsx';

export default {
  title: 'General/${name}',
  component: ${name},
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
    <${name}
      dir={dir}
      inverted={inverted}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  dir: 'ltr',
  inverted: false
}

export const RTL = Template.bind({});
RTL.args = {
  dir: 'rtl',
  inverted: false
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
