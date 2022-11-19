// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export default function User() {
//   const [listUser, setListUser] = useState([]);
//   useEffect(() => {
//     const getUsers = async () => {
//       const result = await axios({
//         method: "get",
//         url: `https://jsonplaceholder.typicode.com/users`,
//       });
//       setListUser(result.data);
//     };
//     getUsers();
//   }, []);
//   return (
//     <>
//       {listUser.map((user) => (
//         <h2 key={user.id}>{user.username}</h2>
//       ))}
//     </>
//   );
// }
