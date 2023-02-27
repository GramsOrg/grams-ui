/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import CreateProfileOptions from './CreateProfileOptions';

describe('CreateProfileOptions Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CreateProfileOptions />);
    expect(asFragment()).toMatchSnapshot();
  });
});
