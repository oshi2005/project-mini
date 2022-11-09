import React from "react";
import Sliderbar from "./Sliderbar";
import Headers from "./Headers";
import "../css/Home.css";
export default function Home() {
  return (
    <div className="container">
      <Headers />
      <Sliderbar />
    </div>
  );
}
