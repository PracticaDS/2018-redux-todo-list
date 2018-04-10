import { compose } from 'ramda' 
let i = 0

export const ADD_ITEM = 'ADD_ITEM'
export const addItem = text => ({
  type: ADD_ITEM,
  item: { 
    id: i++,
    text,
    done: false
  }
})

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
})

export const TOGGLE_DONE = 'TOGGLE_DONE'
export const toggleDone = id => ({
  type: TOGGLE_DONE,
  id
})

// fetching

export const LOADING_ITEMS = 'LOADING_ITEMS'
const loadingItems = () => ({ type: LOADING_ITEMS })

export const LOAD_ITEMS = 'LOAD_ITEMS'
const loadItems = items => ({ type: LOAD_ITEMS, items })

export const FETCH_ITEMS = 'FETCH_ITEMS'
export const fetchItems = () => async (dispatch) => {
  dispatch(loadingItems())
  
  const todos = await fetch('/todos')
  const items = await todos.json()
  
  setTimeout(() => dispatch(loadItems(items)), 1500)
}