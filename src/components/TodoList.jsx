import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List'
import Websocket from 'react-websocket'
import TodoListItem from './TodoListItem'
import AddTodoListItem from '../containers/AddTodoListItem'

import { fetchItems } from '../actions/todo'
import { onData } from '../actions/rtm'

import { id } from '../actions/fetch-utils'

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
            <TodoListItem key={item.id} item={item} />
          ))}
        </List>
        <AddTodoListItem />

        <Websocket url='ws://localhost:3001/'
              onMessage={this.handleRTMData}/>
      </div>
    )
  }

  handleRTMData = data => {
    const { onData } = this.props
    const result = JSON.parse(data)
    // ignorar mensajes propios
    if (result.from !== `${id}`) {
      onData(result)
    }
  }
}

export default connect(state => ({
  items: state.items,
  loadingItems: state.loadingItems
}),
{
  fetchItems,
  onData
})(TodoList)