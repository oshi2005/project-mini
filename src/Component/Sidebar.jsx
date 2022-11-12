import React from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";
import {
  FaHome,
  FaBloggerB,
  FaUserAlt,
} from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="container-header">
      <div className="navbar">
        <ul>
          <Link to="todo">
            <li>
              <span>
                <FaHome />
              </span>
              Todo
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="Album">
            <li>
              <span>
                <FaBloggerB />
              </span>
              Album
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="user">
            <li>
              <span>
                <FaUserAlt />
              </span>
              Users
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
