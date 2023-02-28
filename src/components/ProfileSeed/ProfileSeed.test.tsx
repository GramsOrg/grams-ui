/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import ProfileSeed from './ProfileSeed';

describe('ProfileSeed Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ProfileSeed seed='any' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
