import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Ablum() {
  const [listAblum, setListAblum] = useState([]);
  useEffect(() => {
    const getAblum = async () => {
      const resultAblum = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/albums`,
      });
      setListAblum(resultAblum.data);
    };
    getAblum();
  }, []);
  return (
    <>
      {listAblum.map((ablum) => (
        <h2 key={ablum.id}>{ablum.title}</h2>
      ))}
    </>
  );
}
