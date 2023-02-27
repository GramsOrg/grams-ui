/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import Terms from './Terms';

describe('Terms Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Terms />);
    expect(asFragment()).toMatchSnapshot();
  });
});
