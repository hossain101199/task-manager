import React, { useRef } from "react";
import Form from "./Form";
import InputField from "./InputField";
import PrimaryButton from "./PrimaryButton";

interface Props {
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TaskInputField: React.FC<Props> = ({ handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Form
        className="flex flex-col md:flex-row justify-center gap-3 first-letter mb-5"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <InputField
          type="text"
          placeholder="Enter a Task"
          name="taskInput"
          inputRef={inputRef}
          className="w-full focus:drop-shadow-2xl input__box"
        />
        <PrimaryButton type="submit" className="w-full md:w-fit">
          ADD
        </PrimaryButton>
      </Form>
    </div>
  );
};

export default TaskInputField;
