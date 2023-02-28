/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import SelectionList from './SelectionList';

describe('SelectionList Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<SelectionList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
