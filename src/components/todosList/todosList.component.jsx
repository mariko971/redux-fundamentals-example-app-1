import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './todosList.styles.css';
import ColorCoder from '../colorSelector/colorSelect.component';


const TodoItem = (props)=>{
  const dispatch = useDispatch()
  console.log(props)
  const complete = ()=> dispatch({type:'todos/todoToggled', payload:props.id})
  const itemDelete = ()=> dispatch({type:'todos/todoDeleted', payload:props.id})

  return (
    <li className="itemContainer">
      <div className="toggleIcon">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={complete}
        />
      </div>
      <p className="todoText">{props.text}</p>
      <ColorCoder {...props}/>
      <p className="deleteIcon" onClick={itemDelete}>&#10005;</p>
    </li>
  )
}



const TodoList = ()=>{
    const stateTodos = useSelector(state=> state.todos);
    const stateFilters = useSelector(state=>state.filters);
   
    const currentFilteredState = () => {
      if (stateFilters.colors.length !== 0) {
        return stateTodos.filter((todo) =>stateFilters.colors.includes(todo.color))
      }
      return stateTodos;
    }

    const currentState = currentFilteredState()

    const filterCompleted = currentState.filter(todo=>todo.completed)
    const filterActive = currentState.filter(todo=>!todo.completed)

    const filteredState = (filters)=>{
      
      switch(filters.status){
        
        case 'Completed':{
          return filterCompleted;
        }
        case 'Active':{
          return filterActive;
        }
        default: return currentState;
      }
    
    }
    const finalState = filteredState(stateFilters)

        return (
        <div className="todoList">
            <div className='todoItem'>
                {finalState.map(todo=>{
                    return (
                      <TodoItem key={todo.id} {...todo}/>
                    )
                }

                )}
            </div>
        </div>
    )
}

export default TodoList;