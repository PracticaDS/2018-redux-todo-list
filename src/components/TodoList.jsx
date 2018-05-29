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
    const { items, loadingItems, error } = this.props

    return (
      <div>
        { loadingItems && <div>Loading ... </div> }
        { error && <div className="errors">{error}</div> }
        
        <List className="todoList">
          { items.map(item => (
            <TodoListItem key={item._id} id="listaTodos" item={item} />
          ))}
        </List>
        <AddTodoListItem />
      </div>
    )
  }
}

export default connect(state => ({
  items: state.items,
  error: state.error,
  loadingItems: state.loadingItems
}),
{
  fetchItems
})(TodoList)