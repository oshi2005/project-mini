import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./css/global.css";
import Todo from "./components/Todo";
import Ablum from "./components/Album";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="todo" element={<Todo />}></Route>
          <Route path="ablum" element={<Ablum />}></Route>
          <Route path="user" element={<User />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
