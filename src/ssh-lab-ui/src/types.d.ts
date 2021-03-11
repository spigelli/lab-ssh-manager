interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

interface Host {
    host_name: string;
    ipv4_address: string;
    associated_keys?: RsaKey[];
	known_hosts?: string[];
	public_key?: string;
	users?: string[];
}

type RsaKey = string;
