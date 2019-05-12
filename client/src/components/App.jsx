import React from 'react';
import axios from 'axios';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: '',
      listName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    axios.get('/api/todoList')
      .then((data) => this.setState({ todos: data.data }))
      .catch(err => console.log(err));
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { todo, listName } = this.state
    axios.post('/api/todoList', { todo, listName })
      .then(() => this.fetchTodos())
      .catch(err => console.log(err));
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <form id="form" onSubmit={this.handleSubmit}>
            <label>
              Todo:
              <input type="text" name="todo" onChange={this.handleChange} />
            </label>
            <label>
              List Name:
              <input type="text" name="listName" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <List todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;