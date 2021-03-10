import React, {Component} from 'react';
import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { HostList } from './HostList';
import {MainContainer} from "@dell/clarity-react/dist/layout/main-container/MainContainer";

const initialState = {
};

type MainPageProps = {
    token?: string
    level?: string
    message?: string
}

export type MainPageState = Readonly<typeof initialState>;

export default class Main extends React.Component<MainPageProps> {
    readonly state: MainPageState = initialState;
    render(){
        return(
            <MainContainer title="Title">
                Hello
            </MainContainer>
        );
    }
}

// const initialTodos: Todo[] = [
//     {
//         text: 'walk the dog',
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
