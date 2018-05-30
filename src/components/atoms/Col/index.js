import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  float: left;
  box-sizing: border-box;
  margin: 0.5rem ${props => props.margin}%;
  min-height: 0.125rem;
  width: ${props => (100 - (props.margin * 2) - (props.total / props.size - 1) * (props.margin * 2)) / (props.total / props.size) }%;
`

const Col = (props) => (
  <Wrapper {...props}>
    {props.children}
  </Wrapper>
)

Col.propTypes = {
  margin: PropTypes.number,
  size: PropTypes.number,
  total: PropTypes.number,
}

Col.defaultProps = {
  margin: 2,
  total: 12,
  size: 1
}

export default Col
