import { FC } from "react";
import { TableBody } from "./Body";
import { TableHeader } from "./Header";

export const Table: FC = () => {
  return (
    <>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
};
