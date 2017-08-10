import React from 'react';
import { mount } from 'enzyme';
import HelloWorld from '../components/HelloWorld.jsx';



describe('HelloWorld', () => {
  const props = { message: 'world' };
  const wrapper = mount(
    <HelloWorld message={props.message} />
  );


  test('Should have text value', () => {
    const span = wrapper.find('span');
    expect(span.text()).toBe('Hello ');
  });


  test('Passing in the message "world" should result in "Hello  world" ', () => {
    const div = wrapper.find('div');
    expect(div.text()).toBe('Hello  world');
  });



});