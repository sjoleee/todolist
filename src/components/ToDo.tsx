import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";

function ToDo({ text, id, category }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    console.log(event);
  };

  return (
    <div>
      <span>{text}</span>
      {category !== "TO_DO" ? (
        <button name="TO_DO" onClick={onClick}>
          To do
        </button>
      ) : null}
      {category !== "DOING" ? (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      ) : null}
      {category !== "DONE" ? (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      ) : null}
    </div>
  );
}

export default ToDo;
