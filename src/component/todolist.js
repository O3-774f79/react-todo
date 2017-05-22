import React, { Component } from 'react';
import TodoItem from './todoitem';
class TodoList extends Component {
    render() {
        let {item} = this.props 
        return (
            <div>
                <ul>
                    {item.map((todo,i)=> <li key={i}><TodoItem text={todo}/></li>)}
                </ul>
            </div>
        )
    }
}
export default TodoList