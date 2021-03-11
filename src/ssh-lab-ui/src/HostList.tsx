import React from 'react';
import { HostItem } from './HostItem';
import {Card, CardBlock, CardFooter, CardImage, CardMediaBlock, CardText, CardTitle} from '@dell/clarity-react/dist/cards/Card';

interface Props {
  hosts: Host[]
}

export const HostList: React.FC<Props> = ({ hosts }) => {
  return(
		<Card header="Hosts" style={{margin: "0px"}}>
			<CardBlock>
				{hosts.map( host => (
					<HostItem key={host.host_name} host={host} />
				))}
			</CardBlock>
			<CardFooter>
				<a className="btn btn-primary">Add</a>
			</CardFooter>
		</Card>
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
