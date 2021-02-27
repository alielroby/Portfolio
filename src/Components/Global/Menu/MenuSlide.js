import React, { Component } from "react";
import "./MenuSlide.scss";
import $ from "jquery";
function closeMenu() {
  $(".menu-slide").toggleClass("menu-slideShow");
  $(".menu").toggleClass("menuFixed");
  for (var i = 1; i <= $(".menu-slide nav ul li a").length; i++) {
    $(".menu-slide nav ul li a:nth-child(" + i + ")").toggleClass("AOpen");
  }
}
class MenuSlide extends React.Component {
  render() {
    return (
      <div className="menu-slide">
        <nav>
          <ul>
            <li>
              <a onClick={closeMenu} href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#about">
                about us
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#resume">
                resume
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#services">
                services
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default MenuSlide;
