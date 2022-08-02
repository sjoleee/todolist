import { atom, useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atom";
import CreateToDos from "./components/CreateToDos";
import ToDo from "./components/ToDo";

function ToDoList() {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const [todo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <>
      <CreateToDos />
      <h1>todo</h1>
      {todo.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
      <hr />
      <h1>doing</h1>
      {doing.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
      <hr />
      <h1>done</h1>
      {done.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
      <hr />
    </>
  );
}

export default ToDoList;
