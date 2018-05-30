import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TechRadarShowTemplate from '../../templates/TechRadarShowTemplate'

import Actions from '../../../actions/radar-actions'

class TechRadarShowPage extends React.Component {
  constructor(props) {
    super(props)
    const params = new URLSearchParams(props.location.search);
    const source = params.get('src')
    if (source) {
      props.onPageLoaded(source)
    }
  }

  render() {
    return (
      <TechRadarShowTemplate {...this.props}/>
    )
  }
}

const connector = connect(
  ({ radar }) => radar,
  dispatch => ({
    onPageLoaded: (url) => dispatch(Actions.uiRadarLoaded({ url }))
  })
)

export default connector(TechRadarShowPage)
