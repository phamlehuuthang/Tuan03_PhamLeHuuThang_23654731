import { useState } from "react";

export default function TodoInput({addTodo}) {
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        addTodo(text);
        setText("");
    };

    return (
        <div>
            <input type="text" value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập công việc..."/>

            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}