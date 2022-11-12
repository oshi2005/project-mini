import React from "react";
import Sidebar from "../Component/Sidebar";
import Header from "../Component/Header";

import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ marginLeft: "250px", padding: "50px" }}>
        <Outlet></Outlet>
      </div>
    </>
  );
}
