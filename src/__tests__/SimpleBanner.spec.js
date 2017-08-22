import React from 'react';
import 'jest-styled-components';
import cheerio from 'cheerio';
import { mount, shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import SimpleBanner from '../components/SimpleBanner.jsx';

/* 
 * styled-components doesn't seem to work 100% with enzyme, so i'm using cheerio to do jquery like navication.
 * Anytime you use a styled-component to make a element enzyme doesn't recognize it as styled.div or the variable you gave it
 */

// ENZYME REF: // http://airbnb.io/enzyme/docs/api/index.html



describe('SimpleBanner', () => {
  // Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.
  const props = { message: 'world' };


  test('Shallow Rendering', () => {
    // that it renders something
    const wrapper = shallow(
      <SimpleBanner message={props.message} />
    );
    expect(wrapper.length).toEqual(1)
  });
  test('Make sure there is an element with the class .TEST-TEST', () => {
    const wrapper = shallow(
      <SimpleBanner message={props.message} />
    );
    expect(
      wrapper.find('.TEST-TEST').exists()
    ).toBe(true);
  });
  test('Make sure there is a span element', () => {
    const wrapper = shallow(
      <SimpleBanner message={props.message} />
    );
    const $ = cheerio.load(wrapper.html());
    expect($('span').length).toEqual(1);
    expect($('span').text()).toContain('Hello');
  });







  // console.log(wrapper.html());
  // console.log(wrapper.html().find('span'));
  // console.log(wrapper.children().html());
  // console.log(wrapper.renderer);


  // console.log(wrapper.find('span').exists());
  // console.log(wrapper.find('p').at(0).html());
  // console.log(wrapper.find('styled.Bold').at(2).html());
  // const Subtitle = styled.span ``;
  // console.log(Subtitle.displayName);
  // console.log(wrapper.find(Subtitle).html());



  // console.log(wrapper.html().includes('hello'));
  // console.log(wrapper.text());


  // expect(
  //   wrapper.find('span').exists()
  // ).toBe(true);
  // test('Has a <span> with the value "Hello"', () => {
  //   const wrapper = shallow(
  //     <SimpleBanner message={props.message} />
  //   );

  //   const x = wrapper.find('.TEST-TEST').exists();
  //   console.log(x);

  //   // console.log(wrapper);

  //   // const x = wrapper.find('Bold').prop('message');



  // });
  test('if you pass in the "message" prop it will add it to the div');











  // console.log(wrapper.find('span').at(0));
  // console.log(wrapper);
  // console.log(wrapper.find('span').children().length);
  // const span = wrapper.find('span');
  // expect(span.text()).toBe('Hello ');
  // expect(wrapper.contains(<span>Hello </span>)).to.equal(true);
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