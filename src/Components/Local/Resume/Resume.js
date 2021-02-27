import { render } from "@testing-library/react";
import React, { Component } from "react";
import Headline from "../../Global/HeadLineSection/Headline";
import ItemCard from "../../Global/item-card/ItemCard";
import Steps from "../../Global/Steps/Steps";
import "./Resume.scss";
class Resume extends Component {
  render() {
    return (
      <section className="resumeSec">
        <div className="container">
          <Headline headline="Resume" des="My formal Bio Details" id="resume" />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <ItemCard
                h1="Education"
                h2="Work History"
                h3="Programming Skill"
                h4="Designer Skills"
                h5="SEO Skills"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
              <Steps
                headline1="Envato University"
                headline21="B.sc in Computer Engineer"
                des1="Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                random Lipsum generator."
                date1="2020-2021"
                headline2="Envato University"
                headline22="B.sc in Computer Engineer"
                des2="Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                random Lipsum generator."
                date2="2020-2021"
                headline3="Envato University"
                headline23="B.sc in Computer Engineer"
                des3="Reference site about Lorem Ipsum, giving information on its origins, as well as a 
                random Lipsum generator."
                date3="2020-2021"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Resume;
