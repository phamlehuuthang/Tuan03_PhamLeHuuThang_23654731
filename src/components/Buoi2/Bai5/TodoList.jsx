import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {todos.map(todo => (
                <TodoItem key = {todo.id} todo={todo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    )
}

export default TodoList;