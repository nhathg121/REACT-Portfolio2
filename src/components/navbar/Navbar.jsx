import React from "react";
import "./navbar.sass";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <h2 style={{ fontFamily: "sans-serif" }}>
          DIFFUSION
        </h2>
        <div className="social">
          <a href="https://www.facebook.com/nhathg121" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/nhat.hh/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/zalo-logo.png" style={{ scale: "2" }} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
