import React, {Fragment} from 'react'

class SingleTodo extends React.Component {

    render() {

        const {singleTodo, clearSingleTodo} = this.props

        const handleClearSingleTodo = () => {
            clearSingleTodo()
        }

        return (
            <Fragment>
                <h1 id="logo">Single todo component</h1>
                <h1>{singleTodo.todoBody}</h1>
                <p>{singleTodo.id}</p>
                <button className="btn hover" onClick={handleClearSingleTodo}>Back</button>
            </Fragment>
        )
    }
}

export default SingleTodo