import { connect } from 'react-redux'
import AddTodoListItem from '../components/AddTodoListItem'
import { addItem } from '../actions/todo'

export default connect(
  () => ({}), 
  ({ 
    addItemAction: addItem
  }))
(AddTodoListItem)