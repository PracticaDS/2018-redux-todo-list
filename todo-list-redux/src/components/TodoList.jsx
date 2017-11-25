import React from 'react'
import List from 'material-ui/List'
import TodoListItem from './TodoListItem'
import AddTodoListItem from './AddTodoListItem'

export default function TodoList(props) {
  const items = [
    { id: 1, text: 'Ponerse las gotas para los ojos', listo: false  },
    { id: 2, text: 'Pedir turno con el médico', listo: false },
    { id: 3, text: 'Arreglar la cocina', listo: false },
  ]

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