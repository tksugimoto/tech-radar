import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import JsonViewer from './'

const Wrapper = styled.div`
`

const entries = [
  {
    quadrant: 3,
    ring: 0,
    label: "AWS EMR",
    active: true,
    link: "../data_processing/aws_emr.html",
    moved: -1
  },
  {
    quadrant: 3,
    ring: 2,
    label: "Spark",
    active: false,
    link: "../data_processing/spark.html",
    moved: 0
  },
]

storiesOf('Organisms|JsonViewer', module)
  .add('default', () => (
    <Wrapper>
      <JsonViewer entries={entries}/>
    </Wrapper>
  ))
