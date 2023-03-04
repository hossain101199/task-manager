import React, { useState } from "react";
import Container from "../components/atoms/Container";
import TaskInputField from "../components/atoms/TaskInputField";
import TaskList from "../components/molecules/TaskList";
import { Task } from "../models/models";
import backgroundImage from "../assets/images/background.png";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksLength = tasks.length;

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task = e.currentTarget.taskInput.value;
    if (task.length !== 0) {
      setTasks([...tasks, { id: Date.now(), task: task, isDone: false }]);
    }

    e.currentTarget.taskInput.value = "";
  };

  return (
    <div
      className="bg-[#1C2135] min-h-screen"
      // className=" min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionX: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <Container>
        <h1 className="text-2xl font-extrabold text-center my-5 text-white">
          Task Manager
        </h1>
        <TaskInputField handleAdd={handleAdd} />
        {tasksLength !== 0 && <TaskList tasks={tasks} setTasks={setTasks} />}
      </Container>
    </div>
  );
};

export default Home;
