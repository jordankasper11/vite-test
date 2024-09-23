import "./App.css";
import { TransferList } from "./components";
import { items } from "./data";

function App() {
  return (
    <div className="w-screen max-w-[900px] mx-auto p-[60px]">
      <TransferList values={items} />
    </div>
  );
}

export default App;
