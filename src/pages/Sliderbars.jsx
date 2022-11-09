import React from "react";
import { Link } from "react-router-dom";
import "../css/Sliderbars.css";
import { FaNetworkWired, FaUserAlt, FaCalendarAlt } from "react-icons/fa";

export default function Sliderbarss() {
  return (
    <div className="container-header">
      <div className="navbar">
        <ul>
          <Link to="todo">
            <li>
              <span>
                <FaNetworkWired />
              </span>
              To do
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="ablum">
            <li>
              <span>
                <FaCalendarAlt />
              </span>
              Ablum
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
