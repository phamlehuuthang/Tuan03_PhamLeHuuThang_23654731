//CHA GIỮ STATE
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
    const [todos, setTodo] = useState([])

    const addTodo = (newTodo) => {
        if(!newTodo.trim()) return;
        setTodo([...todos, {id: Date.now(), newTodo}]);
    }

    const deleteTodo = (id) => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    return (
        <div style={styles.container}>
            <h2>Todo list</h2>
            <TodoInput addTodo={addTodo} />
            <TodoList todos = {todos} deleteTodo = {deleteTodo}/>
        </div>
    )
}

const styles = {
    container:{
        width: "400px",
        margin: "40px auto",
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
    }
}