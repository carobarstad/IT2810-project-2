import React from 'react';
import ThemeButton from '../components/ThemeButton';
const ReactTestRenderer = require('react-test-renderer');

describe('Button', () => {
  it('matches snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ThemeButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});