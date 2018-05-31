import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import TechRadarEditTemplate from './'

const Wrapper = styled.div`
`

const entries = [
  {
    quadrant: 'Languages',
    ring: 'ADOPT',
    label: "AWS EMR",
    moved: -1
  },
  {
    quadrant: 'Infrastructure',
    ring: 'TRIAL',
    label: "Spark",
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

storiesOf('Templates|TechRadarEditTemplate', module)
  .add('default', () => (
    <Wrapper>
      <TechRadarEditTemplate entries={entries}
                             quadrants={quadrants}
                             colors={colors}
                             rings={rings}/>
    </Wrapper>
  ))
