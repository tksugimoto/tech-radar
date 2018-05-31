import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TechRadar from '../../organisms/TechRadar'
import EntryTable from '../../organisms/EntryTable'
import JsonViewer from '../../organisms/JsonViewer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const EntryTableWrapper = styled.div`
  flex-shrink: 1;
  margin-bottom: 10px;
`
const RadarWrapper = styled.div`
  flex: 1;
`

const JsonViewerWrapper = styled.div`
  display: inline-flex;
  flex: 1;
  max-height: 300px;
  min-height: 300px;
`

const TechRadarEditTemplate = (props) => (
  <Wrapper>
    <Col>
      <EntryTableWrapper>
        <EntryTable {...props}/>
      </EntryTableWrapper>
      <JsonViewerWrapper>
        <JsonViewer {...props}/>
      </JsonViewerWrapper>
    </Col>
    <RadarWrapper>
      <TechRadar  {...props}/>
    </RadarWrapper>
  </Wrapper>
)

export default TechRadarEditTemplate
