import React from 'react'
import TodoItem from './TodoItem'

class Todos extends React.Component {
    render() {

        const {todos, deleteTodo} = this.props

        return(
            <div>
                {todos.map(todo => (
                    <TodoItem 
                    todo={todo} 
                    key={todo.id} 
                    deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        )
    }
}

export default Todos