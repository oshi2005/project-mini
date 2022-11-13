import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";
import { FaBackspace, FaUserEdit } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function User() {
  const [listUser, setListUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const result = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users`,
      });
      setListUser(result.data);
    };
    getUsers();
  }, []);
  const handleOpen = (id) => {
    setShowModal(true);
    setDeleteID(id);
  };
  const handleClose = () => setShowModal(false);
  const deleteUser = (userId) => {
    const newData = listUser.filter((item) => item.id !== userId);
    setListUser([...newData]);
    setShowModal(false);
  };
  const handleOpenEditModal = (item) => {
    setEditModal(true);
    setEditItem(item);
  };
  const handleCloseEdit = () => setEditModal(false);
  const updateUser = (id) => {
    const newObject = [...listUser];
    newObject.forEach((item) => {
      if (item.id == id) {
        item.name = Name;
        item.username = UserName;
        item.phone = Phone;
        item.email = Email;
      }
    });
    setListUser([...newObject]);
    setEditModal(false);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {listUser.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn delete"
                  onClick={() => handleOpen(item.id)}
                >
                  <FaBackspace />
                </button>
                <button
                  className="btn edit"
                  onClick={() => handleOpenEditModal(item)}
                >
                  <FaUserEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={showModal} onClose={handleClose}>
        <DeleteModal showid={deleteID} deleteUser={deleteUser} />
      </Modal>
      <Modal open={editModal} onClose={handleCloseEdit}>
        <EditModal
          user={editItem}
          updateUser={updateUser}
          name={Name}
          setName={setName}
          UserName={UserName}
          setUserName={setUserName}
          Phone={Phone}
          setPhone={setPhone}
          Email={Email}
          setEmail={setEmail}
        />
      </Modal>
    </div>
  );
}
