import { RootErrorBoundary } from "./components/ErrorBoundary/RootBoundary";
import { Table } from "./components/Table";
import "./index.css";

function App() {
  return (
    <RootErrorBoundary>
      <div>
        <Table title="Suspense" />
      </div>
    </RootErrorBoundary>
  );
}

export default App;
