import React from "react";
import { Task } from "../../models/models";
import SingleTask from "./SingleTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className="flex flex-col gap-3 ">
      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
