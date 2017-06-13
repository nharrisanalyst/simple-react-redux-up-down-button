import React from 'react';
import { connect } from 'react-redux'
import TotalClicks from '../components/totalClicks'



const mapStateToProps =(state) =>{
  return{
    totalClicks: parseInt(state.get('totalClick'))
  }
}




const TotalClicksCont = connect(
  mapStateToProps

)(TotalClicks);

export default TotalClicksCont;