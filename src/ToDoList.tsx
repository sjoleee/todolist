import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "./atom";
import CreateToDos from "./components/CreateToDos";
import ToDo from "./components/ToDo";

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);
  //toDoState에서 관리되는 todo들에 변동이 생길때바다 로컬스토리지에 저장

  console.log(toDos);

  const Todos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };

  return (
    <>
      <h1>TO DO APP</h1>
      <hr />
      <CreateToDos />
      <select onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      {Todos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  );
}

export default ToDoList;
