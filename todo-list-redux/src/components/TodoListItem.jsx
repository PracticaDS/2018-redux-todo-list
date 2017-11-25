import React from 'react'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

export default function TodoListItem({ item }) {
  return (
    <ListItem dense>
      <Checkbox tabIndex={-1} disableRipple />
      <ListItemText primary={item.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}