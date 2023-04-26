import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Modal from "./components/Modal";
import { store } from "./store";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Provider store={store}>
      <div className="bg-primary-background h-full w-full">
        <button
          className="fixed bg-primary text-modal-white top-4 left-4 px-4 py-2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Create Job
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </Provider>
  );
}

export default App;
