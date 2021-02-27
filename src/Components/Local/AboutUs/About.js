import React, { Component } from "react";
import "../../Global/Animations/Animations.scss";
import Headline from "../../Global/HeadLineSection/Headline";
import "./About.scss";
import img from "./img/img1.png";
class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
          <Headline headline="About us" des="why you choose me ?" id="about" />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img src={img} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="content">
                <h3>Why Choose me ?</h3>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
                <div className="list">
                  <h5>Here is Few Features : </h5>
                  <ul>
                    <li>User Interface Design </li>
                    <li>User Experience Design </li>
                    <li>Visual Commination Design </li>
                    <li>Interaction Design </li>
                    <li>Supper Support</li>
                  </ul>
                  <button className="hire">hire me</button>
                  <button className="resume">get resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
