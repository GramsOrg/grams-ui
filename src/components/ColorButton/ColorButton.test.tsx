/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import ColorButton from './ColorButton';

describe('ColorButton Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ColorButton color="blue" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
