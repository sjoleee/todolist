import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  left: 400px;
  position: absolute;
  top: 300px;
`;

function ToDoList() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="입력하세요"></input>
      <button>제출</button>
    </Form>
  );
}

export default ToDoList;
