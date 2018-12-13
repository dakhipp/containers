import { SET_COUNT } from './types'

const INITIAL_STATE = {
  count: 0,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.payload }
    default:
      return state
  }
}
