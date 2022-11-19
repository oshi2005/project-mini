import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import axios from "axios";
import "../css/Home.css";
import { FaBackspace, FaUserEdit } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import CircularProgress from "@mui/material/CircularProgress";

export default function User() {
  const [listUser, setListUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getUsers = async () => {
    const result = await axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/users`,
    });
    setListUser(result.data);
  };
  useEffect(() => {
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
  const updateUser = (id, Name, UserName, Phone, Email) => {
    const newObject = [...listUser];
    newObject.forEach((item) => {
      if (item.id === id) {
        item.name = Name;
        item.username = UserName;
        item.phone = Phone;
        item.email = Email;
      }
    });
    console.log(newObject);
    setListUser([...newObject]);
    setEditModal(false);
  };
  const handleSearchChange = (value) => {
    if (value.length === 0) {
      setIsLoading(false);
      getUsers();
    } else {
      setSearchValue(value);
      setIsLoading(true);
    }
  };
  const debouncedSearchTerm = useDebounce(searchValue, 1000);
  useEffect(
    () => {
      let crrr = listUser.filter((item) =>
        item.username.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );

      setListUser([...crrr]);
      setIsLoading(false);
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      {isLoading === true ? (
        <CircularProgress></CircularProgress>
      ) : (
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
      )}

      <Modal open={showModal} onClose={handleClose}>
        <DeleteModal showid={deleteID} deleteUser={deleteUser} />
      </Modal>
      <Modal open={editModal} onClose={handleCloseEdit}>
        <EditModal
          user={editItem}
          updateUser={updateUser}
          onClose={handleCloseEdit}
        />
      </Modal>
    </div>
  );
}
