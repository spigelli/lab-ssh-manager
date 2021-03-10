import React from 'react';
import { HostItem } from './HostItem';

interface Props {
  hosts: Host[]
}

export const HostList: React.FC<Props> = ({ hosts }) => {
  return(
    <ul>
      {hosts.map( host => (
        <HostItem key={host.host_name} host={host} />
      ))}
    </ul>
  );
};
/*
import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[]
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return(
    <ul>
      {todos.map( todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

*/
