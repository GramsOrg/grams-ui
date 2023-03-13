// component.tsx
exports.component = name => `import React from 'react';

import { useTranslation } from 'react-i18next';

import { useDirection } from 'grams-common';

import '../../main.css';

export interface I${name}Props {

  /**
   * Toggles between light and dark modes
   */
  inverted?: boolean;
}

const defaultProps = {
  inverted: false
};

const ${name} = (props: I${name}Props) => {

  const { t } = useTranslation();
  const direction = useDirection();

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
  }
};

const Template = ({ ...props }) => {
  return (
    <${name}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
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
