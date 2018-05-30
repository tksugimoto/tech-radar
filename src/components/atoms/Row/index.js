import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

const Row = (props) => (
  <Wrapper {...props}>
    {props.children}
  </Wrapper>
)

Row.propTypes = {
}

export default Row
