import axios from "axios";
import { FC } from "react";
import useSWR from "swr";
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

const axiosFetch = () =>
  axios.get("https://hoge.com").then((res) => {
    console.log("Success", res);
    return people;
  });

export const TableContent: FC = () => {
  // const { data: people } = useSWR("data", fetchPeople, { suspense: true });
  const { data: people, error } = useSWR("data", axiosFetch, {
    suspense: true,
  });

  console.log("error", error);

  return (
    <>
      {people?.map(({ id, name, age }) => (
        <TableRow key={id} name={name} age={age} />
      ))}
    </>
  );
};
