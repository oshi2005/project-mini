import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Todo() {
  const [listTodo, setListTodo] = useState([]);
  useEffect(() => {
    const getTodo = async () => {
      const result = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/todos`,
      });
      setListTodo(result.data);
    };
    getTodo();
  }, []);
  return (
    <div>
      {listTodo.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}
