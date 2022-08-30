import { FC } from "react";
import useSWR from "swr";
import { api } from "../../apiConfig";
import { TableRow } from "./Row";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

type Person = {
  id: number;
  name: string;
  age: number;
};

const people: Person[] = [
  { id: 1, name: "taro", age: 26 },
  { id: 2, name: "jiro", age: 24 },
  { id: 3, name: "saburo", age: 22 },
];

const fetchPeople = async () => {
  let data: Person[] = [];

  await new Promise<Person[]>((resolve, reject) => {
    console.log("データ取得開始");
    if (getRandomInt(2)) {
      setTimeout(() => {
        console.log("データ取得成功");
        resolve(people);
      }, 1000);
    } else {
      setTimeout(() => {
        console.log("サーバーエラー");
        reject(new Error("Server Error"));
      }, 1000);
    }
  }).then((res) => (data = res));

  return data;
};

const axiosFetch = () => api.get("people").then((res) => people);

const planeFetch = () =>
  fetch("/movies.json").then((res) => {
    console.log(res);
    return people;
  });

export const TableContent: FC = () => {
  // const { data: people } = useSWR("data", fetchPeople, { suspense: true });
  const { data: people } = useSWR("data", planeFetch, {
    suspense: true,
  });

  return (
    <>
      {people?.map(({ id, name, age }) => (
        <TableRow key={id} name={name} age={age} />
      ))}
    </>
  );
};
