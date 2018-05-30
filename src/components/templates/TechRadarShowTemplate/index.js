import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TechRadar from '../../organisms/TechRadar'

const Wrapper = styled.div`
`

const TechRadarShowTemplate = (props) => (
  <Wrapper>
    <TechRadar {...props}/>
    <div>
      <Link to='/edit'>Edit Radar</Link>
    </div>
  </Wrapper>
)

TechRadarShowTemplate.propTypes = {
}

export default TechRadarShowTemplate
