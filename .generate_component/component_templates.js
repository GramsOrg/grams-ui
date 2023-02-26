// component.tsx
exports.component = name => `import React from 'react';

import './${name}.css';

export interface I${name}Props {
  dir?: string;
}

const ${name} = (props: I${name}Props) => {
  props = {
    dir: 'ltr',
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
    }
  }
};

const Template = ({dir, mode, ...props}) => {
  return (
    <${name}
      dir={dir}
      {...props}
    />
  );
};

export const Default = () => <${name} />;

export const Sandbox = Template.bind({});
Sandbox.args = {
  dir: 'ltr'
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
