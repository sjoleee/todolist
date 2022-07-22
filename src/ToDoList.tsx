import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  left: 400px;
  position: absolute;
  top: 300px;
`;

// function ToDoList() {
//   const [value, setValue] = useState("");
//   const [valueError, setValueError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setValueError("");
//     setValue(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (value.length < 10) {
//       setValueError("error");
//       return valueError;
//     }
//     console.log("submit");
//   };

//   return (
//     <Form onSubmit={onSubmit}>
//       <input onChange={onChange} value={value} placeholder="입력하세요"></input>
//       <button>제출</button>
//       {valueError !== "" ? <div>{valueError}</div> : null}
//     </Form>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <Form>
      <input {...register("id")} placeholder="입력하세요"></input>
      <input {...register("password")} placeholder="입력하세요"></input>
      <input {...register("name")} placeholder="입력하세요"></input>
      <input {...register("phone")} placeholder="입력하세요"></input>
      <input {...register("email")} placeholder="입력하세요"></input>
      <button>제출</button>
    </Form>
  );
}

export default ToDoList;
