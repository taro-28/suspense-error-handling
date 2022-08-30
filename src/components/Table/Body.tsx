import { FC, Suspense } from "react";
import { AxiosErrorBoundary } from "../ErrorBoundary/AxiosErrorBoundary";
import { TableBodyLoading } from "../SuspenseFallBack/TableBodyLoading";
import { TableContent } from "./Content";

export const TableBody: FC = () => {
  return (
    <tbody>
      <Suspense fallback={<TableBodyLoading />}>
        <AxiosErrorBoundary>
          <TableContent />
        </AxiosErrorBoundary>
      </Suspense>
    </tbody>
  );
};
