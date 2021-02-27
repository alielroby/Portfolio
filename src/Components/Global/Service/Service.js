import React, { Component } from "react";
import "./Service.scss";
import svg from "./img/shape.svg";
class Service extends Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <div className="item">
          <svg
            width="370"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            xmlns
            xlink="http://www.w3.org/1999/xlink"
            xmlns="true"
            svgjs="http://svgjs.com/svgjs"
            viewBox="0 0.681 370 223.638"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="370"
              height="225"
              viewBox="0.08 0.498 369.92 223.59"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M.08 99.557s15.007-66.794 51.8-54.34c36.794 12.452 43.02 57.736 121.701 13.585 78.68-44.152 95.662-58.304 124.53-23.775C326.982 69.557 370 .497 370 .497v223.59H.08V99.558z"
              />
            </svg>
          </svg>
          <div
            className="overlay"
            style={{ backgroundColor: this.props.color }}
          ></div>
          <div className="content">
            <img src={"./img/" + this.props.icon} alt="" />
            <h4>{this.props.headline}</h4>
            <p>{this.props.des}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
