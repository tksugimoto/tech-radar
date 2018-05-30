import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import TechRadar from './'

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

const colors = {
  background: "#fff",
  grid: "#bbb",
  inactive: "#ddd"
}

const quadrants = [
    { name: "Languages" },
    { name: "Infrastructure" },
    { name: "Frameworks" },
    { name: "Data Management" }
]
const rings = [
    { name: "ADOPT", color: "#93c47d" },
    { name: "TRIAL", color: "#93d2c2" },
    { name: "ASSESS", color: "#fbdb84" },
    { name: "HOLD", color: "#efafa9" }
]

storiesOf('Organisms|TechRadar', module)
  .add('default', () => (
    <Wrapper>
      <TechRadar entries={entries}
                 width={1450}
                 height={1000}
                 colors={colors}
                 title={'Tech Radar'}
                 quadrants={quadrants}
                 rings={rings}
                 print_layout={true}/>
    </Wrapper>
  ))
