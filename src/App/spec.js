import React from 'react';

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
    const component = shallow(<App title={'Foo Bar'} />);

    it('renders the component with the correct element', () => {
      expect(component.type()).to.eql('div');
    });

    it('has the title in props', () => {
      expect(component.contains('Foo Bar')).to.equal(true);
    });

    it('has all class names', () => {
      expect(component.find('.header')).to.have.length(1);
      expect(component.find('.content')).to.have.length(1);
    });
  });

  describe('lifecycle methods', () => {
    it('calls render', () => {
      spy(App.prototype, 'render');

      const component = mount(<App />);
      expect(App.prototype.render.calledOnce).to.equal(true);
    });
  });

  describe('events', () => {
    it('increments the counter', () => {
      const component = mount(<App />);

      component.setState({ counter: 1 });
      component.find('button').at(0).simulate('click');

      expect(component.state().counter).to.equal(2);
    });

    it('increments the counter', () => {
      const component = mount(<App />);

      component.setState({ counter: 1 });
      component.find('button').at(1).simulate('click');

      expect(component.state().counter).to.equal(0);
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
