import React, { useState, useEffect } from 'react'
import { Container, TextView} from './styles'
import PropTypes from 'prop-types'


const ViewComponent = ({title}) => {
  return (
    <Container>
      <TextView>{title}</TextView>
    </Container>
  );
}

ViewComponent.defaultProps = {

}

ViewComponent.propTypes = {

}

export default ViewComponent