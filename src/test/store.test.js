import makeStore from '../store'
import {initial_state} from '../reducer_core';



describe('store', ()=>{
  it('create store with the correct initial state',()=>{
      const store = makeStore();
      
      expect(store.getState()).toEqual(initial_state);
  
  
  
  });




})