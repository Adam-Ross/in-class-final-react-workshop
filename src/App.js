import React from 'react'
import Todos from './components/Todos'
import TodoInput from './components/TodoInput'
import SingleTodo from './components/SingleTodo'



import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends React.Component {

  state = {
    todos: [],
    singleTodo: null
  }

  render() {
    const {todos, singleTodo} = this.state


    // Add todo
    const addTodo = (obj) => {
      const id = uuidv4(); 
      obj.id = id
      this.setState({todos: [...todos, obj ]})
    }

    // Delete todo
    const deleteTodo = (id) => {
      this.setState({todos: todos.filter(todo => todo.id !== id)})
    }

    // selectSingleTodo
    const selectSingleTodo = (todo) => {
      this.setState({singleTodo: todo})
    }

    // Clear single todo
    const clearSingleTodo = () => {
      this.setState({singleTodo: null})
    }

    // Conditional rendering
    if(singleTodo) {
      return (
        <div className="container">
          <SingleTodo singleTodo={singleTodo} clearSingleTodo={clearSingleTodo} />
        </div>
      )
    }


    return(
      <div className="container">
        <h1 id="logo">Todo list in react</h1>
        <TodoInput addTodo={addTodo}/>
        <Todos 
        todos={todos} 
        deleteTodo={deleteTodo}
        selectSingleTodo={selectSingleTodo}
         />
      </div>
    )
  }
}

export default App;
