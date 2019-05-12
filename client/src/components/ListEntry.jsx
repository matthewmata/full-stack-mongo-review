import React from 'react';

const ListEntry = (props) => (
  <div>
    {props.todo.todo} from {props.todo.listName}
  </div>
)

export default ListEntry;