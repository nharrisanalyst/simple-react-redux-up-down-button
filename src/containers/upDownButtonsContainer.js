import React from 'react'
import {connect} from 'react-redux';
import UpDownButtons from '../components/upDownButtons'
import {goUp, goDown} from '../actions'


const mapStateToProps = (state) =>{
 return {
    current:parseInt(state.get('current'))
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{
    handleClickUp: ()=> { dispatch(goUp())},
    
    handleClickDown: ()=> { dispatch(goDown())}

  }
}


const UpDownButtonsContainers=connect(
  mapStateToProps,
  mapDispatchToProps
)(UpDownButtons)


export default UpDownButtonsContainers;