import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { when, propSatisfies, equals, pipe, tap } from 'ramda'

export default class AddTodoListItem extends React.Component {
  
  state = {
    text: ''
  }
  
  render() {
    return (
      <div>
        <TextField
          id="text"
          label="Text"
          margin="normal"
          value={this.state.text}
          onChange={this.onChange}
          onKeyPress={when(propSatisfies(equals('Enter'), 'key'),
            pipe(tap(this.addItem), _ => _.preventDefault())
          )}
        />
        <Button raised color="primary" onClick={this.addItem}>Agregar</Button>
      </div>
    )
  }

  onChange = e => {
    this.setState({ text: e.target.value })
  }

  addItem = () => {
    const { addItemAction } = this.props
    addItemAction(this.state.text)
    this.setState({ text: '' })
  }
}