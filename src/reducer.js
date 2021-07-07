import { combineReducers } from 'redux';

import FiltersReducer from './features/filters/filtersSlice';
import TodosReducer from './features/todos/todosSlice';


const rootReducer = combineReducers({
    todos: TodosReducer,
    filters: FiltersReducer
})

export default rootReducer;