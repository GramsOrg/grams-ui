/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import ProfileOptions from './ProfileOptions';

describe('ProfileOptions Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<ProfileOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
