import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { addItem } from '../actions/todo'

class AddTodoListItem extends React.Component {
  
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
  }
}

export default connect(() => ({}), ({ addItemAction: addItem }))(AddTodoListItem)