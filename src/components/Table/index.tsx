import { FC, memo } from "react";
import { TableBody } from "./Body";
import { TableHeader } from "./Header";

type Props = {
  title?: string;
};

export const Table: FC<Props> = memo(({ title = "" }) => {
  return (
    <>
      <table>
        <caption>{title}</caption>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
});
