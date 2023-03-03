import React from "react";
import { Task } from "../../models/models";
import SingleTask from "../atoms/SingleTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className="border-2 border-blue-500">
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
