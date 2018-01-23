import React from 'react';
import renderer from 'react-test-renderer';

import App, { doIncrement, doDecrement } from './';

describe('App', () => {

  describe('state', () => {
    it('should increment the counter in state', () => {
      const state = { counter: 0 };
      const newState = doIncrement(state);

      expect(newState.counter).to.equal(1);
    });

    it('should decrement the counter in state', () => {
      const state = { counter: 0 };
      const newState = doDecrement(state);

      expect(newState.counter).to.equal(-1);
    });
  });

  describe('component', () => {
    // it('should increment the counter in state', () => {
    //   expect(true).to.be.true;
    // });
  });

  // test('renders', () => {
  //   const component = renderer.create(
  //     <App />,
  //   );

  //   let tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();
  // });
});
