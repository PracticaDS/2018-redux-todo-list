import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import TodoListItem from './TodoListItem'
import AddTodoListItem from './AddTodoListItem'

class TodoList extends React.Component {
  
  render() {
    const { items } = this.props

    return (
      <div>
        <List>
          {items.map(item => (
            <TodoListItem key={item.id} item={item} />
          ))}
        </List>
        <AddTodoListItem />
      </div>
    )
  }
}

export default connect(state => ({
  items: state.items
}))(TodoList)