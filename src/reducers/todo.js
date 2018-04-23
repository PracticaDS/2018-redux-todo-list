import { update } from 'ramda'
import { ADD_ITEM, REMOVE_ITEM, TOGGLE_DONE, LOAD_ITEMS, LOADING_ITEMS } from '../actions/todo'
import { ServerActionTypes } from '../actions/rtm'

const initialState = {
  items: [],
}

export function todo(state = initialState, action) {
  switch (action.type) {
    case LOADING_ITEMS: return {
      ...state,
      loadingItems: true
    }
    case LOAD_ITEMS: return {
      ...state,
      items: action.items,
      loadingItems: false
    }
    case ADD_ITEM: return {
      ...state,
      items: state.items.concat(action.item)
    }
    case ServerActionTypes.DELETED:
    case REMOVE_ITEM: return {
      ...state,
      items: state.items.filter(i => i.id !== action.id)
    }
    case TOGGLE_DONE: return {
      ...state,
      items: state.items.map(item => item.id === action.id ? ({ ...item, done: !item.done }) : item)
    }
    // server actions
    case ServerActionTypes.UPDATED: return {
      ...state,
      items: update(state.items.findIndex(_ => _.id === action.id), action.item, state.items)
    }
    default: return state
  }
}