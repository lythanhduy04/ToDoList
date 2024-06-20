import React, { useState } from "react";
function ToDo() {
  const [tasks, setTasks] = useState(["Sleep", "Do some thing", "Watching TV"]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(even) {
    setNewTask(even.target.value);
  }
  function addTask() {}
  function deleteTask() {}
  function moveTaskUp() {}
  function moveTakeDown() {}
  return (
    <div className="to-do-list">
      <h1>To Do List:</h1>
      <ol>
        {tasks.map((task, index) => (
          <li>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTakeDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}
      ></input>
      <button className="add-button" onclick={addTask}>
        Add
      </button>
    </div>
  );
}
export default ToDo;
