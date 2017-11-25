import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

export default function AddTodoListItem() {
  return (
    <div>
      <TextField
          id="text"
          label="Text"
          margin="normal"
        />
      <Button raised color="primary">
        Agregar
      </Button>
    </div>
  )
}