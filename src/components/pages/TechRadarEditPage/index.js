import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TechRadarEditTemplate from '../../templates/TechRadarEditTemplate'

import Actions from '../../../actions/radar-actions'

const TechRadarEditPage = (props) => (<TechRadarEditTemplate {...props} />)

const connector = connect(
  ({ radar }) => radar,
  dispatch => ({
    onAfterChangeEntryTable: (changes) => dispatch(Actions.uiChangeEntries({})),
    onPressCopyButton: () => {},
  })
)
export default connector(TechRadarEditPage)
