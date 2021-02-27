import React, { Component } from "react";
import Cookies from "js-cookie";
import $ from "jquery";
//=================For Get Cookies Web Mode================//
var WebMode = Cookies.get("mode");
$(document).ready(function () {
  if (Cookies.get("mode") === undefined) {
    Cookies.set("mode", "lightmode", { expires: 7 });
  }
  if (WebMode == "darkmode") {
    $("body").addClass("darkMode");
    $(".DarkToggle").addClass("ActiveDark");
  }
  if (WebMode == "lightmode") {
    $("body").removeClass("darkMode");
    $(".DarkToggle").removeClass("ActiveDark");
  }
});
//============================================================//
//=========Convert From Light Mode To Dark Mode==========//
function ToDarkMode() {
  Cookies.set("mode", "darkmode", { expires: 7 });
  $("body").addClass("darkMode");
  $(".DarkToggle").addClass("ActiveDark");
}
function ToLightMode() {
  Cookies.set("mode", "lightmode", { expires: 7 });
  $("body").removeClass("darkMode");
  $(".DarkToggle").removeClass("ActiveDark");
}
function CheckDarkMode() {
  if (document.cookie === "mode=lightmode") {
    ToDarkMode();
  } else {
    ToLightMode();
  }
}
//======================================================//
class WebModeC extends React.Component {
  render() {
    return (
      <div className="conWebMode">
        <div className="con">
          <button className="DarkToggle" onClick={CheckDarkMode}>
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default WebModeC;
