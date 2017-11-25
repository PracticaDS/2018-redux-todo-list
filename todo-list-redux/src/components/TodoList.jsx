import React from 'react'
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'

export default function TodoList(props) {
  const items = [
    { id: 1, text: 'Ponerse las gotas para los ojos' },
    { id: 2, text: 'Pedir turno con el médico' },
    { id: 3, text: 'Arreglar la cocina' },
  ]

  return (
    <div>
        <List>
          {items.map(item => (
            <ListItem key={item.id} dense>
              <Checkbox tabIndex={-1} disableRipple />
              <ListItemText primary={item.text} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
  )
}