import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";
import { FaBackspace, FaUserEdit } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import DeleteModal from "./DeleteModal";

export default function User() {
  const [listUser, setListUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
                <button className="btn delete">
                  <FaBackspace />
                </button>
                <button className="btn edit">
                  <FaUserEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={showModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteModal />
      </Modal>
    </div>
  );
}
