import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContainerHoc from '../container-hoc'

import * as actions from './actions'

// TODO:
// 1. add ./src/counter/test.js
// 2. add apollo client example

const CounterContainer = props => {
  return ContainerHoc(props)
}

CounterContainer.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
}

function mapStateToProps(store) {
  return { count: store.counter.count }
}

export default connect(
  mapStateToProps,
  actions
)(CounterContainer)
