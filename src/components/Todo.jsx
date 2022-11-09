import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Todo() {
  const [listTodo, setListTodo] = useState([]);
  useEffect(() => {
    const getTodo = async () => {
      const resultTodo = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/todos`,
      });
      setListTodo(resultTodo.data);
    };
    getTodo();
  }, []);

  return (
    <>
      {listTodo.map((todo) => (
        <h2 key={todo.id}>{todo.title}</h2>
      ))}
    </>
  );
}
