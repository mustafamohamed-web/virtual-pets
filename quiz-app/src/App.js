import "./App.css";
import { useGlobalContext } from "./context";
import SetupForm from "./components/SetupForm";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

function App() {
  const { waiting, loading, correct, question, index } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <h2>Quiz app</h2>
    </main>
  );
}

export default App;
