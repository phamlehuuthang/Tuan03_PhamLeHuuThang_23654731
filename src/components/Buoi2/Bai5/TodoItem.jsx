export default function TodoItem({ todo, deleteTodo }) {
  return (
    <li style={styles.item}>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)} style={styles.btn}>
        Delete
      </button>
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #ddd"
  },
  btn: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};