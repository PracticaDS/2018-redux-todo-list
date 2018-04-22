import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import { removeItem, toggleDone } from '../actions/todo'

function TodoListItem({ item, removeItem, toggleDone }) {
  return (
    <ListItem dense>
      <Checkbox tabIndex={-1} disableRipple onChange={() => toggleDone(item.id)} defaultChecked={item.done} />
      <ListItemText primary={item.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={() => removeItem(item.id)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default connect(undefined, 
  ({
    removeItem,
    toggleDone
  })
)(TodoListItem)