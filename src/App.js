import React from 'react'
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'
import './App.css';

class App extends React.Component {

  state = {
    todos: []
  }

  render() {
    const {todos} = this.state

    const addTodo = (obj) => {
      if(todos.length === 0) {
        obj.id = 1
      } else {
        obj.id = todos.length + 1
      }
      this.setState({todos: [...todos, obj ]})
      console.log(todos)
    }

    return(
      <div className="container">
        <h1 id="logo">Todo list in react</h1>
        <TodoInput addTodo={addTodo}/>
        <Todos todos={todos} />
      </div>
    )
  }
}

export default App;
