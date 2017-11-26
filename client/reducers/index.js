
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'

const initState = {
  routing: undefined,
  todos: undefined,
}

export default (state = initState, action)=>{
  return {
    routing: routing(state.routing, action),
    todos: todos(state.todos, action),
  }
}

// export default combineReducers({
//   routing,
//   todos
// })
