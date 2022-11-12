
import "../src/css/global.css"
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Album from "./Component/Album";
import User from "./Component/User";
import Todo from "./Component/Todo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="todo" element={<Todo></Todo>}></Route>
          <Route path="Album" element={<Album></Album>}></Route>
          <Route path="User" element={<User></User>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
