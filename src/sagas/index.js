import {
  takeLatest,
  put
} from 'redux-saga/effects'
import axios from 'axios'
import Actions from '../actions/radar-actions'

function *radarLoaded(action) {
  const res = yield axios.get(action.payload.url)
  yield put(Actions.setRadar({ entries: res.data }))
}

function * fetchEntries(action) {
}

export default function *rootSaga() {
  yield takeLatest('UI_RADAR_LOADED', radarLoaded)
  yield takeLatest('SYS_FETCH_ENTRIES', fetchEntries)
}
