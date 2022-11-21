import React,{ createContext, useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const TodoContext= createContext(); //? Yeni context yaratıldı.

export const TodoProvider =({children})=>{ 
const [filter, setFilter]=useState('active')
 const [todos,setTodos]=useState([
    {
        id:uuidv4(),
        text:'Marketten Yumurta alınacak.',
        completed:false,
    },
 ]); //? Contexte veri girişi sağlandı.
 const addTodo =(text)=> setTodos((prev)=>[...prev,{
    id:uuidv4(),
    text: text,
    completed:false,
}])
const removeTodo=(id)=>{
    const cloned_todos=[...todos];
    const itemIndex=cloned_todos.findIndex(todo=>todo.id===id);
    cloned_todos.splice(itemIndex,1);
    setTodos(cloned_todos);
    console.log(itemIndex)
}
const toggleTodo=(id)=>{
    const cloned_todos=[...todos];
    const itemIndex=cloned_todos.findIndex(todo=>todo.id===id);
    const item=todos[itemIndex];
    item.completed=!item.completed;
    setTodos(cloned_todos);
    console.log(itemIndex)
}

const deneme =(id)=>{
    const data = prompt("Yeni veriyi giriniz.",);
    const cloned_todos=[...todos];
    const itemIndex=cloned_todos.findIndex(todo=>todo.id===id);
    const item=todos[itemIndex];
    item.text=data;
    setTodos(cloned_todos);
    console.log(itemIndex);
}
    

 const values ={
    todos,
    setTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    filter,
    setFilter,
    deneme,
}

return <TodoContext.Provider value={values}>{children}</TodoContext.Provider> //? Child elemanlarını etkilemesi için seçim yapıldı.
}

export const useTodo =()=>{
    const context= useContext(TodoContext);
    if(context===undefined){
        throw new Error("useTodo hook must be call inside TodoProvider");
    }
    return context;//? Dışarıya aktarma işlemi gerçekleştirildi.

}