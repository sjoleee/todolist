import { atom, useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atom";
import CreateToDos from "./components/CreateToDos";
import ToDo from "./components/ToDo";

function ToDoList() {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const [todo, doing, done] = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value);
    console.log(category);
  };
  console.log(category);

  return (
    <>
      <h1>TO DO APP</h1>
      <hr />
      <CreateToDos />
      <select onInput={onInput}>
        <option value={"TO_DO"}>To Do</option>
        <option value={"DOING"}>Doing</option>
        <option value={"DONE"}>Done</option>
      </select>
    </>
  );
}

export default ToDoList;
