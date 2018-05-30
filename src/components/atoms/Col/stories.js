import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Grid from '../Grid'
import Row from '../Row'
import Col from './'

const Wrapper = styled.div`
  width: 800px;
  border: 1px solid #ccc;

  & .col {
    color: #669966;
    border: 1px solid #99cc99;
    background-color: #99e099;
    text-align: center;
    border-radius: 4px;
  }

  & .col p {
    line-height: 3;
  }
`

storiesOf('Atoms|Col', module)
  .add('default', () => (
    <Wrapper>
      <Grid>
        <Row>
          <Col className="col" size={1}><p>One</p></Col>
          <Col className="col" size={11}><p>Eleven</p></Col>
        </Row>
        <Row>
          <Col className="col" size={2}><p>Two</p></Col>
          <Col className="col" size={10}><p>Twelve</p></Col>
        </Row>
        <Row>
          <Col className="col" size={3}><p>Three</p></Col>
          <Col className="col" size={9}><p>Nine</p></Col>
        </Row>
        <Row>
          <Col className="col" size={4}><p>Four</p></Col>
          <Col className="col" size={8}><p>Eight</p></Col>
        </Row>
        <Row>
          <Col className="col" size={5}><p>Five</p></Col>
          <Col className="col" size={7}><p>Seven</p></Col>
        </Row>
        <Row>
          <Col className="col" size={6}><p>Six</p></Col>
          <Col className="col" size={6}><p>Six</p></Col>
        </Row>
        <Row>
          <Col className="col" size={12}><p>Twelve</p></Col>
        </Row>
      </Grid>
    </Wrapper>
  ))
