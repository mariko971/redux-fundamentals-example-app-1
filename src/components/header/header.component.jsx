import { useState } from "react";
import React from 'react';
import { useDispatch } from 'react-redux';

import './header.styles.css';
import TodoList from '../todosList/todosList.component';
import Footer from '../footer/footer.component';
import {saveNewTodo} from '../../features/todos/todosSlice';

const HeaderComponent = ()=>{

    const [todoInput, setTodoInput] = useState('');

    const handleChange = (e)=>setTodoInput(e.target.value);
    

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(todoInput)
        
        dispatch(saveNewTodo(todoInput));
        
       setTodoInput('')
    }

    return (
       <div className="todoList">
           <form onSubmit={handleSubmit}>
           <input type='text' placeholder='What to do next?' value={todoInput} onChange = {handleChange} />
           </form>
           <TodoList/>
           <Footer/>
       </div> 
       
    )
}



export default HeaderComponent;