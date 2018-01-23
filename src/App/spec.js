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
    const wrapper = shallow(<App title={'Foo Bar'} />);

    it('renders the component with the correct element', () => {
      expect(wrapper.type()).to.eql('div');
    });

    it('has the title in props', () => {
      expect(wrapper.contains('Foo Bar')).to.equal(true);
    });

    it('has all class names', () => {
        expect(wrapper.find('.header')).to.have.length(1);
        expect(wrapper.find('.content')).to.have.length(1);
    });
  });

  // test('renders', () => {
  //   const component = renderer.create(
  //     <App />,
  //   );

  //   let tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();
  // });
});
