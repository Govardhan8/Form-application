import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Modal from "./components/Modal";
import { store } from "./store";
import axios from "axios";
import Button from "./components/formutils/Button";
import Cards from "./components/cards";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://614b02a3e4cc2900179eae54.mockapi.io/job"
    );
    if (data.length) {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <div className="bg-primary-background min-h-screen min-w-screen flex flex-col gap-4 p-4">
        <Button onClick={() => setIsOpen(true)}>Create Job</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Cards data={data} />
      </div>
    </Provider>
  );
}

export default App;
