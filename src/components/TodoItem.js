import React from 'react'

class TodoItem extends React.Component {
    render() {

        const {todo} = this.props

        return(
            <div className="listItem">
                <h1>{todo.todoBody}</h1>
                <p>{todo.id}</p>
            </div>
        )
    }
}

export default TodoItem