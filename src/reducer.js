
import { goUp, goDown, initial_state } from './reducer_core'
import { Map } from 'immutable';




const reducer =(state=initial_state, action={type:undefined}) =>{
  switch(action.type){
    case 'GO_UP':
      return state = goUp(state)
    case 'GO_DOWN':
      return state = goDown(state)


    default:
      return state

  }
}




export default reducer; 