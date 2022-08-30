import { FC } from "react";

type TableRowProps = {
  name: string;
  age: number;
};

export const TableRow: FC<TableRowProps> = ({ name, age }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
    </tr>
  );
};
