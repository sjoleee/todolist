import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  left: 400px;
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
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
  const { register, handleSubmit } = useForm();
  const onVaild = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("id", { required: true, minLength: 10 })}
        placeholder="입력하세요"
      />
      <input
        {...register("password", { required: true, minLength: 10 })}
        placeholder="입력하세요"
      />
      <input
        {...register("name", { required: true, minLength: 10 })}
        placeholder="입력하세요"
      />
      <input
        {...register("phone", { required: true, minLength: 10 })}
        placeholder="입력하세요"
      />
      <input
        {...register("email", { required: true, minLength: 10 })}
        placeholder="입력하세요"
      />
      <button>제출</button>
    </Form>
  );
}

export default ToDoList;
