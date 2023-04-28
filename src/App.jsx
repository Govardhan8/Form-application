import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
