import React, { Component } from "react";
import Navbar from "../../Global/Navbar/Navbar";
import img1 from "./img/img1.png";
import "./Header.scss";
import MenuSlide from "../../Global/Menu/MenuSlide";
import $ from "jquery";
$(document).ready(function () {
  const mydata = ["Ali Elroby", "Frelancer", "Front End"];
  var counter = 0;
  $(".Data").addClass("DataActive");
  setInterval(() => {
    counter++;
    if (counter === 3) {
      counter = 0;
    }
    $(".Data").attr("data", mydata[counter]);
    $(".Data").text(mydata[counter]);
  }, 4000);
});
class Header extends React.Component {
  render() {
    return (
      <header className="main-header">
        <Navbar />
        <MenuSlide />
        {/* ===============Start Content============== */}
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="content">
                  <span>
                    Hello, IM{" "}
                    <span className="Data" data="Ali Elroby">
                      Ali Elroby
                    </span>
                  </span>
                  <h2>creative frontend</h2>
                  <p>Freelancer web devolment / frontend devolper</p>
                  <button className="hire">hire me</button>
                  <button className="resume">get resume</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ===============End Content============== */}
        {/* ===============Start Svg============== */}
        <svg
          id="bg-svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#0693e3ff"></stop>
              <stop offset="95%" stopColor="#0cbfaeff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 73.6750736377025,225.77061855670104 147.350147275405,251.54123711340208 209,254 C 270.649852724595,256.4587628865979 320.27448453608247,235.6056701030928 367,235 C 413.72551546391753,234.3943298969072 457.551914580265,254.03608247422682 515,267 C 572.448085419735,279.9639175257732 643.5178571428572,286.25 707,261 C 770.4821428571428,235.75000000000003 826.3766568483061,178.9639175257732 889,175 C 951.6233431516939,171.0360824742268 1020.9755154639176,219.8943298969072 1083,227 C 1145.0244845360824,234.1056701030928 1199.7212812960236,199.45876288659792 1258,188 C 1316.2787187039764,176.54123711340208 1378.1393593519883,188.27061855670104 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
        </svg>
        {/* ===============End Svg============== */}
      </header>
    );
  }
}
export default Header;
