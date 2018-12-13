import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import CounterContainer from './counter/container'

console.log(CounterContainer)

import store from './store'

console.log(store)

const Container = props => {
  // eslint-disable-next-line no-console
  console.log(`${props.name} props:`, props)
  return <div>Open the console to see {props.name} props.</div>
}

Container.propTypes = {
  name: PropTypes.string,
}

const App = () => (
  <Provider store={store}>
    <CounterContainer>
      <Container name="CounterContainer" />
    </CounterContainer>
  </Provider>
)
render(<App />, document.getElementById('root'))
