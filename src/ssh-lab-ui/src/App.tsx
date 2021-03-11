import React, {Component} from 'react';
import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { HostList } from './HostList';
import {MainContainer} from "@dell/clarity-react/dist/layout/main-container/MainContainer";
import {Card, CardBlock, CardFooter, CardImage, CardMediaBlock, CardText, CardTitle} from '@dell/clarity-react/dist/cards/Card';
import { Table } from "@dell/clarity-react/dist/tables/Table";
import { Portlet } from "@dell/clarity-react/dist/portlet/Portlet";
import { Accordion } from "@dell/clarity-react/dist/accordian/Accordion";

const initialState = {
};

type MainPageProps = {
    token?: string
    level?: string
    message?: string
}

const default_hosts: Host[] = [
	{host_name: "sus-gaming", ipv4_address:"192.168.0.181"},
	{host_name: "sus-code", ipv4_address:"192.168.0.181",  associated_keys: ["asfdasdfa"], known_hosts: ["sus-gaming"], public_key: "asdlfkja", users: ["spigelli"],}
];

export type MainPageState = Readonly<typeof initialState>;

export default class Main extends React.Component<MainPageProps> {
    readonly state: MainPageState = initialState;
    render(){
        return(
            <MainContainer title="SSH Key Manager" >
				<div style={{display: "flex"}}>
					<div style={{width:"60%"}}>
						<HostList hosts={default_hosts}></HostList>
					</div>
					<div style={{width:"40%", marginLeft:"24px"}}>
						<Card header="Network Graph" style={{margin: "0px"}}>
							graph here
						</Card>
					</div>
				</div>
            </MainContainer>
        );
    }
}

// const initialTodos: Todo[] = [
//     {
//         text: 'walk th className="left"e dog',
//         complete: false,
//     },
//     {
//         text: 'Write app',
//         complete: true,
//     },
// ];
// 
// const initialHosts: Host[] = [
//     {
//         host_name: "sus-code",
//         ipv4_address: "192.168.0.7",
//         associated_keys: [],
//     },
//     {
//         host_name: "sus-containers",
//         ipv4_address: "192.168.0.197",
//         associated_keys: [],
//     },
// ];
// 
// function App() {
//   const [todos, setTodos] = React.useState(initialTodos);
//   const [hosts] = React.useState(initialHosts);
// 
//   const toggleTodo = (selectedTodo: Todo) => {
//       const newTodos = todos.map( (todo: Todo) => {
//         if (todo === selectedTodo){
//           return {
//             ...todo,
//             complete: !todo.complete,
//           }
//         }
//         return todo;
//       });
//       setTodos(newTodos);
//   };
// 
//   const addTodo: AddTodo = (text: string) => {
//     const newTodo = { text, complete: false };
//     setTodos([...todos, newTodo]);
//   }
// 
//   return (
//     <div className="App">
//       <TodoList todos={todos} toggleTodo={toggleTodo} />
//       <AddTodoForm addTodo={addTodo} />
//       <HostList hosts={hosts} />
//     </div>
//   );
// }
// 
// export default App;
