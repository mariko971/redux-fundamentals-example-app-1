import { combineReducers } from 'redux';

import FiltersReducer from './features/filters/filtersSlice';
import TodosReducer from './features/todos/todosSlice';

// export default function rootReducer(state = {}, action){
//     return {
//         todos : todosSlice(state.todos,action),
//         filters : filterSlice(state.filters, action)
//     }
// }

const rootReducer = combineReducers({
    todos: TodosReducer,
    filters: FiltersReducer
})

export default rootReducer;