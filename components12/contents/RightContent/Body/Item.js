import React from 'react'
import { useTodo } from '../../../context/TodoContext'
function Item({todo}) {
  const {removeTodo,toggleTodo}=useTodo();

  const removeT =(id)=>{
    removeTodo(id)
  }
  const toggleT =(id)=>{
    toggleTodo(id)
  }

  return (
    <div key={todo.id} className='d-flex justify-content-between mt-2' >
      <div className='col-9 mt-2 d-flex'>
      <input type="checkbox" className='col-2' checked={todo.completed} />
      <label className='ms-3 lead col-12'>{todo.text}</label>
      </div>
      <div className='col-3 d-flex justify-content-evenly'>
      <button className='btn btn-success col-5' onClick={()=>toggleT(todo.id)}><i className="bi bi-arrow-counterclockwise"></i></button>
      <button className='btn btn-danger col-5' onClick={()=>removeT(todo.id)}><i className="bi bi-x-lg"></i></button>
      </div>
    </div>
  )
}

export default Item
