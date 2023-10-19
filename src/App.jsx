import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { API_KEY, URL } from "./constants";
import axios from "axios";

axios.defaults.baseURL = URL;
axios.defaults.params = {
  api_key: API_KEY,
};

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
