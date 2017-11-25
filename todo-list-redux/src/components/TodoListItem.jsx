import React from 'react'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'

export default function TodoListItem({ item }) {
  return (
    <ListItem dense>
      <Checkbox tabIndex={-1} disableRipple />
      <ListItemText primary={item.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}