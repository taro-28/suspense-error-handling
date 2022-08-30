import { FC, Suspense } from "react";
import { AxiosErrorBoundary } from "../ErrorBoundary/AxiosErrorBoundary";
import { TableContent } from "./Content";

const SuspenseFallBack = () => {
  return (
    <tr>
      <td colSpan={2}>
        <span>Loading...</span>
      </td>
    </tr>
  );
};

export const TableBody: FC = () => {
  return (
    <tbody>
      <Suspense fallback={<SuspenseFallBack />}>
        <AxiosErrorBoundary>
          <TableContent />
        </AxiosErrorBoundary>
      </Suspense>
    </tbody>
  );
};
