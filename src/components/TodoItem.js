import React from 'react'

class TodoItem extends React.Component {
    render() {

        const {todo, deleteTodo} = this.props

        const handleDelete = (e) => {
            deleteTodo(e.target.id)
        }

        return(
            <div className="listItem">
                <h1>{todo.todoBody}</h1>
                <p>{todo.id}</p>
                <button className="btn" id={todo.id} onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default TodoItem