/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import SelectLocale from './SelectLocale';

describe('SelectLocale Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SelectLocale />);
    expect(asFragment()).toMatchSnapshot();
  });
});
