import React, { useEffect, useRef, useState } from "react";
import CheckIcon from "../../assets/svgs/CheckIcon";
import DeleteIcon from "../../assets/svgs/DeleteIcon";
import EditIcon from "../../assets/svgs/EditIcon";
import { Task } from "../../models/models";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? { ...task, task: e.currentTarget.taskInput.value }
          : task;
      })
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : task;
      })
    );
  };

  return (
    <div className="flex">
      {task.isDone ? (
        <s>{task.task}</s>
      ) : edit ? (
        <form onSubmit={(e) => handleEdit(e, task.id)}>
          <input
            type="text"
            name="taskInput"
            defaultValue={task.task}
            ref={inputRef}
          />
        </form>
      ) : (
        <span>{task.task}</span>
      )}

      <button onClick={() => setEdit(!edit)}>
        <EditIcon></EditIcon>
      </button>
      <button onClick={() => handleDelete(task.id)}>
        <DeleteIcon></DeleteIcon>
      </button>
      <button onClick={() => handleDone(task.id)}>
        <CheckIcon></CheckIcon>
      </button>
    </div>
  );
};

export default SingleTask;
