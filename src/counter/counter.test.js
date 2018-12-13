import React from 'react'
import _ from 'lodash'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import baseStore from '../store'
import { SET_COUNT } from './types'
import CounterContainer from './container'

describe('CounterContainer', () => {
  it('Should render a child component with all props attached', () => {
    const Counter = () => <div>test</div>
    const store = _.clone(baseStore)
    const wrapper = mount(
      <Provider store={store}>
        <CounterContainer>
          <Counter />
        </CounterContainer>
      </Provider>
    )
    const props = wrapper.find('Counter').props()
    expect(props.count).toEqual(0)
    expect(props.setCount).toBeDefined()
  })

  it('Should accurately respond to the dispatched action SET_COUNT ', () => {
    const store = _.clone(baseStore)
    expect(store.getState().counter.count).toEqual(0)
    store.dispatch({ type: SET_COUNT, payload: 1 })
    expect(store.getState().counter.count).toEqual(1)
    store.dispatch({ type: SET_COUNT, payload: 5 })
    expect(store.getState().counter.count).toEqual(5)
  })
})
