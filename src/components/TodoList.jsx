import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import TodoListItem from './TodoListItem'
import AddTodoListItem from '../containers/AddTodoListItem'

import { fetchItems } from '../actions/todo'

class TodoList extends React.Component {

  componentDidMount() {
    const { fetchItems } = this.props
    fetchItems()
  }
  
  render() {
    const { items, loadingItems } = this.props

    return (
      <div>
        {loadingItems && <div>Loading ... </div>}
        <List>
          {items.map(item => (
            <TodoListItem key={item._id} item={item} />
          ))}
        </List>
        <AddTodoListItem />
      </div>
    )
  }
}

export default connect(state => ({
  items: state.items,
  loadingItems: state.loadingItems
}),
{
  fetchItems
})(TodoList)