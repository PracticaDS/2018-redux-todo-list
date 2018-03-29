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
  const wrapper = mount(<AddTodoListItem />)

  expect(wrapper.text()).toEqual('TextAgregar')
})

it('calls the add item on click', () => {
  const addSpy = jest.fn();

  const wrapper = mount(<AddTodoListItem addItemAction={addSpy}/>)

  wrapper.find('button').simulate('click')

  expect(addSpy).toHaveBeenCalledTimes(1)
})
