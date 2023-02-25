/**
* @jest-environment jsdom
*/

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import ProfileSelector from './ProfileSelector';

describe('ProfileSelector Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ProfileSelector />);
    expect(asFragment()).toMatchSnapshot();
  });
});
