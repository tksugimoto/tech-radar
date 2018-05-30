import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

const Grid = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

Grid.propTypes = {
}

export default Grid
