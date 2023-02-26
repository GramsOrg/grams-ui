/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import SelectProfile from './SelectProfile';

describe('SelectProfile Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SelectProfile />);
    expect(asFragment()).toMatchSnapshot();
  });
});
