import React, { Component } from "react";
import "./Steps.scss";
import Step from "./Step/Step";
class Steps extends Component {
  render() {
    return (
      <div className="steps">
        <Step
          headline={this.props.headline1}
          headline2={this.props.headline21}
          des={this.props.des1}
          date={this.props.date1}
        />
        <Step
          headline={this.props.headline2}
          headline2={this.props.headline22}
          des={this.props.des2}
          date={this.props.date2}
        />
        <Step
          headline={this.props.headline3}
          headline2={this.props.headline23}
          des={this.props.des3}
          date={this.props.date3}
        />
      </div>
    );
  }
}
export default Steps;
