import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TechRadar from '../../organisms/TechRadar'

const Wrapper = styled.div`
`

const TechRadarShowTemplate = (props) => (
  <Wrapper>
    <TechRadar {...props}/>
  </Wrapper>
)

TechRadarShowTemplate.propTypes = {
}

export default TechRadarShowTemplate
