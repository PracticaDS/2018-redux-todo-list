import { ADD_ITEM, REMOVE_ITEM, TOGGLE_DONE, LOAD_ITEMS } from '../actions/todo'

const initialState = {
  items: [],
}

export function todo(state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS: return {
      ...state,
      items: action.items
    }
    case ADD_ITEM: return {
      ...state,
      items: state.items.concat(action.item)
    }
    case REMOVE_ITEM: return {
      ...state,
      items: state.items.filter(i => i.id !== action.id)
    }
    case TOGGLE_DONE: return {
      ...state,
      items: state.items.map(item => item.id === action.id ? ({ ...item, done: !item.done }) : item)
    }
    default: return state
  }
}