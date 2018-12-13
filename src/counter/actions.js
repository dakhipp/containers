import { SET_COUNT } from './types'

export function setCount(count) {
  return {
    type: SET_COUNT,
    payload: count,
  }
}
