 const PlayerDto = require('shared/Contracts/DTOs/PlayerDto');
// const AddPlayerCommand = require('shared/Contracts/Commands/AddPlayerCommand');
// const EditPlayerProfileCommand = require('shared/Contracts/Commands/EditPlayerProfileCommand');



const initialState =
{
  id: 'b779e7e0-d54c-11e7-9cc8-1f638c2e3d35',
  username: "bob"
}

export default (state = initialState, action)=>{
  switch(action.type){
    case "Add Player":
      return action.payload;

    case "Login":
      return action.payload;

    case "Logout":
      return action.payload;

    case "Edit Player":
      return action.playload;

    default: return state;
  }
}



// import { handleActions } from 'redux-actions'
// 
// export default handleActions({
//   'add todo' (state, action) {
//     return [{
//       id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//       completed: false,
//       text: action.payload
//     }, ...state]
//   },

  // 'delete todo' (state, action) {
  //   return state.filter(todo => todo.id !== action.payload )
  // },

  // 'edit todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload.id
  //       ? { ...todo, text: action.payload.text }
  //       : todo
  //   })
  // },

  // 'complete todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload
  //       ? { ...todo, completed: !todo.completed }
  //       : todo
  //   })
  // },

  // 'complete all' (state, action) {
  //   const areAllMarked = state.every(todo => todo.completed)
  //   return state.map(todo => {
  //     return {
  //       ...todo,
  //       completed: !areAllMarked
  //     }
  //   })
  // },

  // 'clear complete' (state, action) {
  //   return state.filter(todo => todo.completed === false)
  // }
// }, initialState)
