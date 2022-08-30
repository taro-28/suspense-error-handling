import axios from "axios";
import { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
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

const ErrorBoundaryFallBack = () => {
  return (
    <tr>
      <td colSpan={2}>
        <span>サーバーエラーが発生しました</span>
      </td>
    </tr>
  );
};

export const TableBody: FC = () => {
  return (
    <tbody>
      <Suspense fallback={<SuspenseFallBack />}>
        <ErrorBoundary
          fallbackRender={(error) => {
            console.log(error);
            if (axios.isAxiosError(error)) {
              return <ErrorBoundaryFallBack />;
            }
            return <>Other Error</>;
          }}
        >
          <TableContent />
        </ErrorBoundary>
      </Suspense>
    </tbody>
  );
};
