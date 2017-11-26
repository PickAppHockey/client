export const addTodo = (payload)=>({
  type: 'add todo',
  payload,
})
export const deleteTodo = (payload)=>({
  type: 'delete todo',
  payload,
})
export const editTodo = (payload)=>({
  type: 'edit todo',
  payload,
})
export const completeTodo = (payload)=>({
  type: 'complete todo',
  payload,
})
export const completeAll = (payload)=>({
  type: 'complete all',
  payload,
})
export const clearCompleted = (payload)=>({
  type: 'clear complete',
  payload,
})

// import { createAction } from 'redux-actions'

// export const addTodo = createAction('add todo')
// export const deleteTodo = createAction('delete todo')
// export const editTodo = createAction('edit todo')
// export const completeTodo = createAction('complete todo')
// export const completeAll = createAction('complete all')
// export const clearCompleted = createAction('clear complete')
