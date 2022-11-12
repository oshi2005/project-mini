<<<<<<< HEAD

import "../src/css/global.css"
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Album from "./Component/Album";
import User from "./Component/User";
import Todo from "./Component/Todo";
=======
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./css/global.css";
import Todo from "./components/Todo";
import Ablum from "./components/Album";
import User from "./components/User";
>>>>>>> a1257318cbc4f742555a3b3666251a20142a22ba
function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home></Home>}>
          <Route path="todo" element={<Todo></Todo>}></Route>
          <Route path="Album" element={<Album></Album>}></Route>
          <Route path="User" element={<User></User>}></Route>
        </Route>
      </Routes>

=======
        <Route path="/" element={<Home />}>
          <Route path="todo" element={<Todo />}></Route>
          <Route path="ablum" element={<Ablum />}></Route>
          <Route path="user" element={<User />}></Route>
        </Route>
      </Routes>
>>>>>>> a1257318cbc4f742555a3b3666251a20142a22ba
    </div>
  );
}

export default App;
