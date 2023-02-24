// component.tsx
exports.component = name => `import React from 'react';

import './${name}.css';

export interface I${name}Props {}

const ${name} = ({}: I${name}Props) => {
  return (
    <>
    </>
  );
};

export default ${name};
`;

// component.stories.jsx
exports.story = name => `import React from 'react';

import ${name} from './${name}.tsx';

export default {
  title: '${name}',
  component: ${name},
  parameters: {
    storyshots: { disable: false },
  },
};

export const Default = () => <${name} />;
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
