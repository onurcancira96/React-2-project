import React from 'react'
import Header from './components12/contents/Header/Index'
import LeftContext from './components12/contents/LeftContent/Index'
import RightContext from './components12/contents/RightContent/Index'
import Input from './components12/contents/TopContent/Index'
import { TodoProvider } from './components12/context/TodoContext'
import './css/main.css'


function App12() {
  return (
      <TodoProvider >
        <div className='arkaplan rounded-3 mt-5 col-8 container pb-5 pt-4'>
        <div className='container '>
        <Header/>
        <Input/>
        </div>
        <div className='col-5 container mt-5'>
        <LeftContext/>
        <RightContext/>
        </div>
        </div>
      </TodoProvider>
  )
}

export default App12
