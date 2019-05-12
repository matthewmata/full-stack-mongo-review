import React from 'react';
import ListEntry from './ListEntry';

const List = (props) => (
  <div>
    {props.todos.map((todo, index) => <ListEntry todo={todo} key={index}/>)}
  </div>
)

export default List;