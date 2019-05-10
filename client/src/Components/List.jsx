import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      listName: 'Todos'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  render() {
    return (
      <div>
        <h1>Todos</h1>
        <form id="form" onSubmit={this.handleSubmit}>
          Enter new todo: <input type="text" name="todo" onKeyUp={this.handleInput} />
        </form>
      </div>
    )
  }
}

export default List;