import axios from "axios";
import { FC, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

const ErrorBoundaryFallBack: FC<FallbackProps> = ({ error }) => {
  console.log(error);

  if (axios.isAxiosError(error)) {
    return (
      <tr>
        <td colSpan={2}>
          <span>サーバーエラーが発生しました</span>
        </td>
      </tr>
    );
  }

  throw error;
};

export const AxiosErrorBoundary: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      {children}
    </ErrorBoundary>
  );
};
