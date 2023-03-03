import React, { useState } from "react";
import TaskInputField from "../components/atoms/TaskInputField";
import TaskList from "../components/molecules/TaskList";
import { Task } from "../models/models";

const Home: React.FC = () => {
  const [task, setTask] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksLength = tasks.length;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
      setTask("");
    }
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-extrabold text-center my-5">Task Manager</h1>
      <TaskInputField task={task} setTask={setTask} handleAdd={handleAdd} />
      {tasksLength !== 0 && <TaskList tasks={tasks} setTasks={setTasks} />}
    </div>
  );
};

export default Home;
