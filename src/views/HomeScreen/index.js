import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'

class HomeScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <ViewComponent title={"Ed dos Prazeres <edimilsonpereira.pro@gmail.com>"} />
    )
  }
}

HomeScreen.defaultProps = {

}

HomeScreen.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(HomeScreen)