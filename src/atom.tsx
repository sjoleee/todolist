import { atom, selector } from "recoil";

// type categories = "TO_DO" | "DOING" | "DONE";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: JSON.parse(localStorage.getItem("toDos") || "[]"),
  //기본값을 []로 주는게 아니라 애초에 로컬스토리지에 저장된 값을 불러옴. 로컬스토리지에 아무것도 없으면 "[]" 근데 JSON.parse를 통해 []로 변환됨
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
