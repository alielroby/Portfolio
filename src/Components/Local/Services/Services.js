import React, { Component } from "react";
import Headline from "../../Global/HeadLineSection/Headline";
import Service from "../../Global/Service/Service";
import "./Services.scss";
class Services extends Component {
  render() {
    return (
      <section className="services">
        <div className="container">
          <Headline
            headline="Services"
            des="What We Provide You ?"
            id="services"
          />
          <div className="row">
            <Service
              headline="Web Design"
              des="Lipsum as it is sometimes known
is dummy text used in laying out print,
 graphic or web designs."
              color="#8540FF"
              icon="icon.svg"
            />
            <Service
              headline="Web Design"
              des="Lipsum as it is sometimes known
is dummy text used in laying out print,
 graphic or web designs."
              color="#FFC50C"
              icon="icon1.svg"
            />
            <Service
              headline="Web Development"
              des="Lipsum as it is sometimes known
is dummy text used in laying out print,
 graphic or web designs."
              color="#EC407A"
              icon="icon2.svg"
            />
          </div>
          <div className="row">
            <Service
              headline="UX Design"
              des="Lipsum as it is sometimes known
is dummy text used in laying out print,
 graphic or web designs."
              color="#FF6331"
              icon="icon5.svg"
            />
            <Service
              headline="Motion Graphic"
              des="Lipsum as it is sometimes known
is dummy text used in laying out print,
 graphic or web designs."
              color="#13B6FF"
              icon="icon4.svg"
            />
            <Service
              headline="Seo Optimize"
              des="Lipsum as it is sometimes known
is dummy text used in laying out print,
 graphic or web designs."
              color="#49AF46"
              icon="icon3.svg"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
