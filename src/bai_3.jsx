import React, { useState, useEffect } from "react";

export default function Bai3() {
  return (
    <div style={{ margin: "20px" }}>
        <h2>Bài 3: Danh sách công việc</h2>
        <TodoList />
    </div>
  );
}

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => deleteTask(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};