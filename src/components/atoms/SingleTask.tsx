import React, { useEffect, useRef, useState } from "react";
import CheckIcon from "../../assets/svgs/CheckIcon";
import DeleteIcon from "../../assets/svgs/DeleteIcon";
import EditIcon from "../../assets/svgs/EditIcon";
import { Task } from "../../models/models";
import Form from "./Form";
import InputField from "./InputField";
import PrimaryButton from "./PrimaryButton";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    const editedTask = e.currentTarget.taskInput.value;
    if (editedTask.length !== 0) {
      setTasks(
        tasks.map((previousTask) =>
          previousTask.id === id
            ? { ...previousTask, task: editedTask }
            : previousTask
        )
      );

      inputRef.current?.blur();
      setIsEdit(false);
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id: number) => {
    setIsEdit(false);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <Form onSubmit={(e) => handleEdit(e, task.id)} className="w-full">
        <InputField
          className={`w-full truncate input__box ${
            isEdit ? "border-primary" : "border-transparent"
          } ${
            task.isDone ? "line-through decoration-red-500 decoration-4" : ""
          }`}
          isDisabled={!isEdit}
          placeholder="Enter a Task"
          type="text"
          name="taskInput"
          defaultValue={task.task}
          inputRef={inputRef}
        />
      </Form>

      <div className="flex gap-3 justify-center">
        <PrimaryButton onClick={() => !task.isDone && setIsEdit(!isEdit)}>
          <EditIcon />
        </PrimaryButton>
        <PrimaryButton onClick={() => handleDelete(task.id)}>
          <DeleteIcon />
        </PrimaryButton>
        <PrimaryButton onClick={() => handleDone(task.id)}>
          <CheckIcon />
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SingleTask;
