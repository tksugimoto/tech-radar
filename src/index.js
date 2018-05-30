import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { runSaga } from './store'
import rootSaga from './sagas'
import App from './components/App'

runSaga(rootSaga)

const root = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, root)
