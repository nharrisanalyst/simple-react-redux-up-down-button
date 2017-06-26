import {shallow} from 'enzyme';
import UpDownButtons from '../components/upDownButtons'
import React from 'react'
import renderer from 'react-test-renderer';
import sinon from 'sinon';

describe('<UpDownButtons/>',()=>{
  const wrapper = shallow(<UpDownButtons />);
  
  it('renders correctly', () =>{
   const tree = renderer.create(
    <UpDownButtons current='0' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
  
  })

  
  it('renders two buttons', () =>{
  
  

  expect(wrapper.find('button')).toHaveLength(2)
  
  });
  
  it('when button is clicked it is called #buttonUp', ()=>{
   const mockHandle=sinon.spy();
   const wrapper = shallow(<UpDownButtons handleClickUp={mockHandle} />);
   
   
   const button = wrapper.find('#buttonUp')
   
   button.simulate('click')
  expect(mockHandle.calledOnce).toEqual(true)
  
  });

  it('when button is clicked it is called #buttonDown', ()=>{
   const mockHandle=sinon.spy();
   const wrapper = shallow(<UpDownButtons handleClickDown={mockHandle} />);
   
   
   const button = wrapper.find('#buttonDown')
   
   button.simulate('click')
  expect(mockHandle.calledOnce).toEqual(true)
  
  });
  
  it('when button is  clicked #buttonUp moves the text up one',()=>{
    const mockHandle=sinon.spy();
    const wrapper = shallow(<UpDownButtons/>)
    const current =wrapper.prop('current')
    console.log(wrapper)
         
  
  });

})