import { atom, useRecoilState } from "recoil";
import { toDoState } from "./atom";
import CreateToDos from "./components/CreateToDos";
import ToDo from "./components/ToDo";

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  console.log(toDos);
  return (
    <>
      <CreateToDos />
      {toDos.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </>
  );
}

export default ToDoList;
