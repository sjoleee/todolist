import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

const Form = styled.form`
  left: 100px;
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
`;

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function CreateToDos() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setToDos((prev) => [
      { text: data.toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "please write a To Do" })}
        placeholder="입력하세요"
      ></input>
      <button>제출</button>
    </Form>
  );
}

export default CreateToDos;
