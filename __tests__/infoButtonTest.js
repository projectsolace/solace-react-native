import 'react-native';
import React from 'react';
import InfoButton from '../src/native/components/Info.native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const infoButton = renderer.create(
    <InfoButton info={`Hello World`} />
  )
  let tree = infoButton.toJSON();
  expect(tree).toMatchSnapshot();
});
