import React, { Component } from "react";
import "./Headline.scss";
class Headline extends Component {
  render() {
    return (
      <div className="row">
        <div id={this.props.id} className="header">
          <h2>{this.props.headline}</h2>
          <span>{this.props.des}</span>
        </div>
      </div>
    );
  }
}
export default Headline;
