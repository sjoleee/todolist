import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atom";

function ToDo({ text, id, category }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    //버튼 누르면 해당 버튼에 해당하는 상태(doing, done)로 변경되게 만들고 싶다.
    setToDos((prev) => {
      //결국 toDos를 변경해줘야하는거니까 setToDos를 쓰자.
      const targetIdx = prev.findIndex((toDo) => toDo.id === id);
      //toDos가 배열 안에 객체형태의 todo들이 모여있는거임. 그 중에서 내가 버튼을 클릭한 todo가 몇번째 todo인지 찾아내는 것.
      //기존 toDos를 가져와서, findIndex, 그러니까 몇번째인지 찾는 매서드를 사용한다. findIndex는 인자로 함수를 받는데, 함수의 조건에 맞는게 몇번째였는지 찾아준다.
      //이 경우에는 prev, 그러니까 기존 toDos에서 하나하나 투두들을 들여다보는데 버튼을 클릭한 그 toDo의 아이디와 돌고있는 toDo의 아이디가 같으면 그게 몇번째였는지 찾아주는거.
      const newToDo = { text, id, category: name as any };
      //그렇게 targetIdx를 찾아내면, 이제 누른 버튼에 해당하는 상태로 변경해줘야한다.
      //newToDo를 만들건데, text나 id는 유지하는데 category만 버튼의 name으로 변경해준다.
      return [
        ...prev.slice(0, targetIdx),
        newToDo,
        ...prev.slice(targetIdx + 1),
      ];
      //이제 찾아낸 targetIdx 기준으로, 그 앞에있는 원소와 그 뒤에있는 원소는 그대로 유지하고 targetIdx에 해당하는 원소만 카테고리를 변경해서 집어넣어주면 된다.
      //근데 카테고리 변경된건 이미 갖고있음 newToDo
      //그걸 그냥 넣어주면 끝
    });
  };

  const onDelete = () => {
    setToDos((prev) => {
      const targetIdx = prev.findIndex((todo) => todo.id === id);
      const copiedTodos = [...prev];
      copiedTodos.splice(targetIdx, 1);
      return copiedTodos;
    });
  };

  return (
    <div>
      <span>{text}</span>
      {category !== Categories.TO_DO ? (
        <button name={Categories.TO_DO} onClick={onClick}>
          To do
        </button>
      ) : null}
      {category !== Categories.DOING ? (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      ) : null}
      {category !== Categories.DONE ? (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      ) : null}
      <button onClick={onDelete}>DELETE</button>
    </div>
  );
}

export default ToDo;
