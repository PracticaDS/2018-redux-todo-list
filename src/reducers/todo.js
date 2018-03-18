import { ADD_ITEM, REMOVE_ITEM, TOGGLE_DONE } from '../actions/todo'

const initialState = {
  items: [],
}

export function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: return {
      ...state,
      items: state.items.concat(action.item)
    }
    case REMOVE_ITEM: {
      const index = state.items.findIndex(i => i.id === action.id)
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      }
    }
    case TOGGLE_DONE: {
      return {
        ...state,
        items: state.items.map(item => item.id === action.id ? ({ ...item, done: !item.done }) : item)
      }
    }
    default: return state
  }
}