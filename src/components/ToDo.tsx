import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";

function ToDo({ text, id, category }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  return (
    <div>
      <span>{text}</span>
      <button>To do</button>
      <button>Doing</button>
      <button>Done</button>
    </div>
  );
}

export default ToDo;
