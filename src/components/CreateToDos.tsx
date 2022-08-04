import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, IToDo, toDoState } from "../atom";

// const Form = styled.form`
//   left: 100px;
//   position: absolute;
//   top: 300px;
//   display: flex;
//   flex-direction: column;
// `;

interface IForm {
  toDo: string;
}

function CreateToDos() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setToDos((prev) => [
      { text: data.toDo, id: Date.now(), category },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "please write a To Do" })}
        placeholder="입력하세요"
      ></input>
      <button>제출</button>
    </form>
  );
}

export default CreateToDos;
