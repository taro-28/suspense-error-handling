import { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

export const RootErrorBoundary: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<span>ホワイトアウトを守るマン</span>}>
      {children}
    </ErrorBoundary>
  );
};
