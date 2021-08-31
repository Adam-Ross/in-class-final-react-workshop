import React from 'react'
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'


import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends React.Component {

  state = {
    todos: []
  }

  render() {
    const {todos} = this.state


    // Add todo
    const addTodo = (obj) => {
      const id = uuidv4(); 
      obj.id = id
      this.setState({todos: [...todos, obj ]})
    }

    // Delete todo
    const deleteTodo = (id) => {
      this.setState({todos: todos.filter(todo => todo.id != id)})
    }


    return(
      <div className="container">
        <h1 id="logo">Todo list in react</h1>
        <TodoInput addTodo={addTodo}/>
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    )
  }
}

export default App;
