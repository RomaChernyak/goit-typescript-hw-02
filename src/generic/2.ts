/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare<T extends TopType, B extends BottomType> (top: T, bottom: B): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
};

const topObj: TopType = {
  name: "Mark",
  color: "black",
};

const bottomObj: BottomType = {
  position: 2,
  weight: 88,
};

compare(topObj, bottomObj);

export {};