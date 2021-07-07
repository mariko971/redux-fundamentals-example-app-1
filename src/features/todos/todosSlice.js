import { client } from '../../api/client'


const initialState = [];

  export default function TodosReducer(state = initialState, action) {
    switch (action.type) {
      case 'todos/todosLoaded': {
        
        return action.payload
      }
      case 'todos/todoAdded': {
        return [ ...state, action.payload]
      }
      case 'todos/todoToggled': {
        return (          
            state.map(todo => {
              if (todo.id !== action.payload) {
                return todo;
              }
                return {
                ...todo,
                completed: !todo.completed
              }
            })
        );        
      }
      case 'todos/colorSelected': {
          return (
            state.map(todo=>{
              if (todo.id !== action.payload.id ){
                 return todo; 
              }
              return {
                  ...todo,
                  color : action.payload.color
              }
           })
          )    
      }
      case 'todos/todoDeleted': { //payload : todoId
        return ( 
          
            state.filter(todo =>todo.id !== action.payload)
        )
      }
      case 'todos/allCompleted':{
        return ( 
           
            state.map(todo=>{
                return{
                    ...todo,
                    completed : true
                }

            })
        )
      }
      case 'todos/completedCleared': {
        return ( 
            
            state.filter(todo=>!todo.completed)
        )
      }
      default: return state;
    }
  }

  export const todosLoaded = todos => {
    return {
      type: 'todos/todosLoaded',
      payload: todos
    }
  }
  export const todoAdded = todos => {
    return {
      type: 'todos/todoAdded',
      payload: todos
    }
  }

  export async function fetchTodos(dispatch, getState) {
    const response = await client.get('/fakeApi/todos')
    dispatch(todosLoaded(response.todos))
  }

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch(todoAdded(response.todo))
  }
}