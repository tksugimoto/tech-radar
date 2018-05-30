import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TechRadar from '../../organisms/TechRadar'
import EntryTable from '../../organisms/EntryTable'

const Wrapper = styled.div`
  display: flex;
`
const EntryTableWrapper = styled.div`
  flex: 1;
`
const RadarWrapper = styled.div`
  flex: 1;
  & > div {
    transform: scale(.75);
    transform-origin: 0 0;
  }
`

const TechRadarEditTemplate = (props) => (
  <Wrapper>
    <EntryTableWrapper>
      <EntryTable {...props}/>
    </EntryTableWrapper>
    <RadarWrapper>
      <TechRadar  {...props}/>
    </RadarWrapper>
  </Wrapper>
)

export default TechRadarEditTemplate
