import React, { Component } from 'react';
import Todo from './input'
import TodoList from './component/todolist'
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    todoItem: []
  }
  this.addTodo = this.addTodo.bind(this)
}

  addTodo(newTodo) {
    this.setState({
      todoItem: this.state.todoItem.concat([newTodo])
    })
  }
  render() {
    let {todoItem} = this.state 
    return (
      <div>
        <Todo onAddTodo={this.addTodo}/>
        <TodoList item={todoItem}/>
      </div>
    );
  }
}

export default App;
