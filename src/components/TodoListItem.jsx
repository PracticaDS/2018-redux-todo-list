import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import { removeItem } from '../actions/todo'
import AddTodoListItem from './AddTodoListItem';

function TodoListItem({ item, removeItem }) {
  return (
    <ListItem dense>
      <Checkbox tabIndex={-1} disableRipple />
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
    removeItem
  })
)(TodoListItem)