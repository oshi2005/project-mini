import React from "react";
import Header from "./Header";
import Sliderbars from "./Sliderbars";
import { Outlet } from "react-router-dom";
import "../css/Home.css";
export default function Home() {
  return (
    <div className="container">
      <Sliderbars />
      <Header />
      <div style={{ marginLeft: "250px", padding: '50px' }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
