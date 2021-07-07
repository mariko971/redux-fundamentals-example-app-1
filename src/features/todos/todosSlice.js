import { client } from '../../api/client'


const initialState = [
  // {id:0, text:'LEARN REACT', completed:false, color:''},
  // {id:1, text:'LEARN REDUX', completed:false, color:''},
  // {id:2, text:'LEARN NODEJS', completed:true, color:''},
  // {id:3, text:'LEARN PYTHON', completed:false, color:''}
]
  

  // function nextTodoId(todos) {
  //   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  //   return maxId + 1
  // }

  

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
           // ...state,
            state.filter(todo =>todo.id !== action.payload)
        )
      }
      case 'todos/allCompleted':{
        return ( 
           // ...state,
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
            //...state,
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