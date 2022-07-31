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

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

interface IForm {
  toDo: string;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
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
  console.log(toDos);
  return (
    <>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: "please write a To Do" })}
          placeholder="입력하세요"
        ></input>
        <button>제출</button>
      </Form>
      {toDos.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </>
  );
}

export default ToDoList;
