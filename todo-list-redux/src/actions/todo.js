
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