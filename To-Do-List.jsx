import React, { useState } from 'react'

function App() {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;
    setTask([...tasks, { name: text, completed: false }]);
    setText("");
  };

  const deleteTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTask(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.item}>
  
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />

            <span style={{
              textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.5 : 1
            }}>
              {task.name}
            </span>

            <button onClick={() => deleteTask(index)} style={styles.deleteBtn}>
              delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  addBtn: {
    padding: "8px 12px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    borderBottom: "1px solid #ddd"
  },
  deleteBtn: {
    background: "none",
    border: "1px solid black",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default App;