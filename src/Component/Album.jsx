import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Album() {
  const [listAlbum, setListAlbum] = useState([]);
  useEffect(() => {
    const getAlbum = async () => {
      const result = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/albums`,
      });
      setListAlbum(result.data);
    };
    getAlbum();
  }, []);
  return (
    <div>
      {listAlbum.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}
