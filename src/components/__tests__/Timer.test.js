import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '../Timer';

test('Timer component works', () => {
  const component = renderer.create(
    <Timer />,
  );
  const timerJson = component.toJSON();
  expect(timerJson).toMatchSnapshot();
});
