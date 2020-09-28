import React from 'react';
import ShowFavorites from '../components/ShowFavorites';
const ReactTestRenderer = require('react-test-renderer');

describe('Button', () => {
  it('matches snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ShowFavorites active="true"/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});