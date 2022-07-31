import { useRecoilState } from "recoil";
import { toDoState } from "./CreateToDos";

function ToDos() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  return (
    <>
      {toDos.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </>
  );
}

export default ToDos;
