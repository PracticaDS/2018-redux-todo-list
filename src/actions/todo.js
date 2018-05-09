import { isoFetch, postWithJSONBody, deleteRequest, putRequestWithJSONBody } from './fetch-utils'

export const ADD_ITEM = 'ADD_ITEM'
export const localAddItem = item => ({
  type: ADD_ITEM,
  item
})
export const addItem = text => async dispatch => {
  const item = { text, done: false }
  const response = await isoFetch('/todos', postWithJSONBody(item))
  const r = await response.json()
  dispatch(localAddItem(r.data))
}

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const localRemoveItem = id => ({
  type: REMOVE_ITEM,
  id
})
export const removeItem = id => async dispatch => {
  await isoFetch(`/todos/${id}`, deleteRequest())
  dispatch(localRemoveItem(id))
}

export const TOGGLE_DONE = 'TOGGLE_DONE'
export const localToggleDone = id => ({
  type: TOGGLE_DONE,
  id
})
export const toggleDone = id => async (dispatch, getState) => {
  const state = getState()
  const item = state.items.find(_ => _._id === id)
  await isoFetch(`/todos/${id}`, putRequestWithJSONBody({ ...item, done: !item.done }))
  dispatch(localToggleDone(id))
}

// fetching

export const LOADING_ITEMS = 'LOADING_ITEMS'
const loadingItems = () => ({ type: LOADING_ITEMS })

export const LOAD_ITEMS = 'LOADED_ITEMS'
const loadItems = items => ({ type: LOAD_ITEMS, items })

export const ERROR_LOADING_ITEMS = 'ERROR_LOADING_ITEMS'
const errorLoading = error => ({ type: ERROR_LOADING_ITEMS, error })

export const FETCH_ITEMS = 'FETCH_ITEMS'
export const fetchItems = () => async dispatch => {
  dispatch(loadingItems())
  try {
    const response = await isoFetch('/todos')
    if (response.status !== 200) {
      dispatch(errorLoading(`Server error ${response.status}`))
    } else {
      const json = await response.json()
      dispatch(loadItems(json.data))
    }
  } catch (err) {
    dispatch(errorLoading(err))
  }
}