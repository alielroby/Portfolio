import React, { Component } from "react";
import "./Navbar.scss";
import $ from "jquery";
function ToggleMenu() {
  $(".menu-slide").toggleClass("menu-slideShow");
  $(".menu").toggleClass("menuFixed");
  for (var i = 1; i <= $(".menu-slide nav ul li a").length; i++) {
    $(".menu-slide nav ul li a:nth-child(" + i + ")").toggleClass("AOpen");
  }
}
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="./img/logo.png" alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">about us</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
            </ul>
          </nav>
          <div className="menu" onClick={ToggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
