import React from 'react'
import {Formik, Field, Form} from "formik"
import validations from './validations'
import { useTodo } from '../../context/TodoContext'
function Input() {
  const {addTodo}=useTodo();
  return (
    <div className='mt-4 col-5 text-center form__group container'>
    <Formik initialValues={{ text: ''}}
    onSubmit={(values,bag)=> { addTodo(values.text); bag.resetForm();}}
    validationSchema={validations}>

      <Form >
        <Field className='form__field' id='text' name='text' placeholder='Ne yapmak istiyorsun?' autoFocus/>
        <label htmlFor='text' className='form__label'>Ne yapmak istiyorsun?</label>
      </Form>

    </Formik>
    </div>
  )
}

export default Input
