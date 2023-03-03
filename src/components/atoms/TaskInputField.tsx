import React, { useRef } from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const TaskInputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="flex"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          placeholder="Enter a Task"
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full border-2 border-black"
        />
        <button type="submit" className="bg-slate-500">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TaskInputField;
