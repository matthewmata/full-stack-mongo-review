import React, { Component } from 'react';
import axios from 'axios';
import ListEntry from './ListEntry.jsx';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      newTodo: '',
      todos: [],
      listName: 'Todos'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }


  fetchTodos() {
    axios
      .get('/api/todoList')
      .then(({ data }) =>
        this.setState({ todos: data }, () => console.log(this.state.todos)) 
      )
      .catch(err => console.log(err));
  }

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, listName } = this.state;
    axios
      .post('/api/todoList', { todo, listName })
      .then(() => this.fetchTodos())
      .catch(err => console.log('Error getting todos: ', err));

    document.getElementById('form').reset();
  }

  handleNewTodo(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  editTodo(id) {
    
    const { newTodo } = this.state;

    axios
      .patch('/api/todoList', { id, newTodo })
      .then(() => this.fetchTodos())
      .catch(err => console.log('Error editing todo: ', err))

    document.getElementById('editForm').reset();
  }




  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form id="form" onSubmit={this.handleSubmit}>
          Enter new todo: <input type="text" name="todo" onKeyUp={this.handleInput} />
        </form><br /><br />

        <div>
          {this.state.todos.map((todo, index) => {
            return (
              <ListEntry 
                key={index} 
                id={todo._id} 
                todo={todo.todo} 
                editTodo={this.editTodo} 
                handleNewTodo={this.handleNewTodo}
                currentNewTodo={this.newTodo} />
            )
          })}
        </div>

      </div>
    )
  }
}

export default List;