import { Map } from 'immutable'


export const initial_state = Map({current:0,totalClick:0});


export function goUp(state){
  const nextState=state.update('current', current => current+1);
  const newState = nextState.update('totalClick', totalClick => totalClick+1);
  
  return newState;
 

}


export function goDown(state){
  const nextState=state.update('current', current => current-1);
  const newState = nextState.update('totalClick', totalClick => totalClick+1);
  
  return newState;


}
