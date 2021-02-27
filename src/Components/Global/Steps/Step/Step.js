import React, { Component } from "react";
import "./Step.scss";
class Step extends Component {
  render() {
    return (
      <div className="step">
        <h4>{this.props.headline}</h4>
        <span>{this.props.headline2}</span>
        {this.props.des}
        <div className="date">{this.props.date}</div>
      </div>
    );
  }
}
export default Step;
