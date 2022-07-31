import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import CreateToDos from "./components/CreateToDos";
import ToDos from "./components/ToDos";

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

  console.log(toDos);
  return (
    <>
      <CreateToDos />
      <ToDos />
    </>
  );
}

export default ToDoList;
