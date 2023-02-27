/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import CreateProfile from './CreateProfile';

describe('CreateProfile Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CreateProfile />);
    expect(asFragment()).toMatchSnapshot();
  });
});
