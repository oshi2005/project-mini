import React from "react";
import '../css/Headers.css'
import {
  FaHome,
  FaBloggerB,
  FaNetworkWired,
  FaUserAlt,
  FaCalendarAlt,
} from "react-icons/fa";
export default function Headers() {
  return (
    <div className="container-header">
      <div className="navbar">
        <ul>
          <a href="/home">
            <li>
              <span>
                <FaHome />
              </span>
              Home
            </li>
          </a>
        </ul>
        <ul>
          <a href="/">
            <li>
              <span>
                <FaBloggerB />
              </span>
              Workflow
            </li>
          </a>
        </ul>
        <ul>
          <a href="/">
            <li>
              <span>
                <FaNetworkWired />
              </span>
              Statistics
            </li>
          </a>
        </ul>
        <ul>
          <a href="/">
            <li>
              <span>
                <FaCalendarAlt />
              </span>
              Calender
            </li>
          </a>
        </ul>
        <ul>
          <a href="/">
            <li>
              <span>
                <FaUserAlt />
              </span>
              Users
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
