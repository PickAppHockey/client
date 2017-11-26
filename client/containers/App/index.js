
import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.css'

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    )
  }
}

const bindActionCreators = (actions, dispatch)=>{
  const finalResult = {}
  Object.keys(actions).forEach((actionName)=>{
    finalResult[actionName] = (payload)=>dispatch(actions[actionName](payload))
  })
  return finalResult;
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addTodo: (payload)=>dispatch(TodoActions.addTodo(payload)),
      editTodo: (payload)=>dispatch(TodoActions.editTodo(payload)),
      deleteTodo: (payload)=>dispatch(TodoActions.deleteTodo(payload)),
      completeTodo: (payload)=>dispatch(TodoActions.completeTodo(payload)),
      completeAll: (payload)=>dispatch(TodoActions.completeAll(payload)),
      clearCompleted: (payload)=>dispatch(TodoActions.clearCompleted(payload)),
    }
  }
}
  

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
