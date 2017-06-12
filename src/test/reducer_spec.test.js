import { Map } from 'immutable';
import {GO_UP, GO_DOWN} from '../actions';
import reducer from '../reducer';

import {goUp, goDown} from '../reducer_core'


describe('reducer', () =>{

it('initializes with the correct state',()=>{
  
  const newState=reducer()
  
  expect(newState).toEqual(Map({current:0,totalClick:0}))


});

it('takes action GO_UP and returns the proper newState', () =>{
 const state = Map({current:44,totalClick:100})
 const action = {type: GO_UP}
 const newState = reducer(state,action);
 
 expect(newState).toEqual(Map({current:45,totalClick:101}));


});

it('takes action GO_DOWN and returns the proper newState', () =>{
  const state = Map({current:44,totalClick:100})
  const action = {type: GO_DOWN}
  const newState = reducer(state,action);
  
  expect(newState).toEqual(Map({current:43,totalClick:101}));
 



});



});


describe('reducer_core function that modify the state in my reducer', ()=>{
  
  it('goUp returns a new state with current +1 and totalClicks +1',() =>{
    const state= Map({current:44,totalClick:100})
    
    const newState = goUp(state)
    
    expect(newState).toEqual(Map({current:45,totalClick:101}));
  });
  
  it('goDown return a ste with current -1 and totalClick +1', () =>{
    const state = Map({current:44,totalClick:100})
    const newState =goDown(state)
    
    expect(newState).toEqual(Map({current:43,totalClick:101}));
  
  
  });


});





