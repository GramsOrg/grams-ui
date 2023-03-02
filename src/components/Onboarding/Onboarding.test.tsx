/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import Onboarding from './Onboarding';

describe('Onboarding Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<Onboarding />);
    expect(asFragment()).toMatchSnapshot();
  });
});
