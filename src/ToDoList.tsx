import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  left: 400px;
  position: absolute;
  top: 300px;
`;

function ToDoList() {
  const [value, setValue] = useState("");
  const [valueError, setValueError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValueError("");
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length < 10) {
      setValueError("error");
      return valueError;
    }
    console.log("submit");
  };

  return (
    <Form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="입력하세요"></input>
      <button>제출</button>
      {valueError !== "" ? <div>{valueError}</div> : null}
    </Form>
  );
}

export default ToDoList;
