import React from 'react'
import { useTodo } from '../../../context/TodoContext';
import Item from './Item';
let filtered=null;
function Body() {
  const {todos,filter}= useTodo();
  filtered=todos;

  filtered=todos.filter((todo)=>
   filter==='active'
   ?todo.completed===false
   :todo.completed===true )

  return (
  <div>
      {filtered.map((todo)=>(
        <Item key={todo.id} todo={todo}/>
      ))}
  </div>
  )
}

export default Body
