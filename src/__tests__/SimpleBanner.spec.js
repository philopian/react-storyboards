import React from 'react';
import { mount, shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import SimpleBanner from '../components/SimpleBanner.jsx';

// http://airbnb.io/enzyme/docs/api/index.html

describe('SimpleBanner', () => {
  // Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
  test('Shallow Rendering', () => {
    const props = { message: 'world' };
    const wrapper = shallow(
      <SimpleBanner message={props.message} />
    );

    // console.log(wrapper);
    // console.log(wrapper.find('span').children().length);

    expect(wrapper.length).toEqual(1)

    // const span = wrapper.find('span');
    // expect(span.text()).toBe('Hello ');
    // expect(wrapper.contains(<span>Hello </span>)).to.equal(true);
  });
});



describe('SimpleBanner', () => {
  //Full DOM rendering is ideal for use cases where you have components that may interact with DOM apis, or may require the full lifecycle in order to fully test the component 
  test('Full Rendering', () => {
    const props = { message: 'world' };
    const wrapper = mount(
      <SimpleBanner message={props.message} />
    );

    const span = wrapper.find('span');
    expect(span.text()).toBe('Hello ');
  });
});




// describe('SimpleBanner - Static Rendering', () => {
// // used to render react components to static HTML and analyze the resulting HTML structure.
// });


///////////////////////////////////////













// // UNIT TEST
// describe('SimpleBanner', () => {

//   test('Shallow test', () => {
//     const wrapper = shallow(<SimpleBanner />);
//     // expect(wrapper.find('.in-bar')).to.have.length(0);
//     expect(wrapper.find()).to.have.length(1);
//     expect(wrapper.find(Bar).dive().find('.in-bar')).to.have.length(1);

//   });


//   // test('Mount, full rendering of the component', () => {
//   //   const props = { message: 'world' };
//   //   const wrapper = mount(
//   //     <SimpleBanner message={props.message} />
//   //   ); // mount == full rendering
//   //   const span = wrapper.find('span');
//   //   expect(span.text()).toBe('Hello ');
//   // });




//   // test('Passing in the message "world" should result in "Hello  world" ', () => {
//   //   const div = wrapper.find('div');
//   //   expect(div.text()).toBe('Hello  world');
//   // });



// });







// SNAP-SHOTS
describe('SimpleBanner (Snapshot)', () => {
  it('SimpleBanner renders hello world', () => {
    const component = renderer.create(<SimpleBanner message="world" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});