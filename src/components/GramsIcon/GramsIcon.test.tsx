/**
 * @jest-environment jsdom
 */

import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';

import GramsIcon from './GramsIcon';

describe('GramsIcon Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<GramsIcon name='world' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
