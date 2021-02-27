import React, { Component } from "react";
import "./ItemCard.scss";
import $ from "jquery";
function AddActive(e) {
  $(e.target).addClass("active");
  $(e.target).siblings().removeClass("active");
}
class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <div className="img-con">
          <div
            className="img active"
            headline={this.props.h1}
            onClick={AddActive}
          >
            <img src="./img/icon6.svg" alt="" />
          </div>
          <div className="img" headline={this.props.h2} onClick={AddActive}>
            <img src="./img/icon7.svg" alt="" />
          </div>
          <div className="img" headline={this.props.h3} onClick={AddActive}>
            <img src="./img/icon8.svg" alt="" />
          </div>
          <div className="img" headline={this.props.h4} onClick={AddActive}>
            <img src="./img/icon9.svg" alt="" />
          </div>
          <div className="img" headline={this.props.h5} onClick={AddActive}>
            <img src="./img/icon10.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default ItemCard;
