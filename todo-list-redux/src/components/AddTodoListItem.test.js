import React from 'react'
import ReactDOM from 'react-dom'
import AddTodoListItem from './AddTodoListItem'
import { mount } from 'enzyme'

// setup 
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })
//

it('renders without crashing', () => {
  let calledWith
  const add = text => { calledWith = text }

  const wrapper = mount(<AddTodoListItem addItem={add}/>)

  expect(wrapper.text()).toEqual('TextAgregar')
})
