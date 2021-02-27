import React, { Component } from "react";
import Headline from "../../Global/HeadLineSection/Headline";
import PriceCard from "../../Global/price-card/PriceCard";
import "./Pricing.scss";
class Pricing extends Component {
  render() {
    return (
      <section className="pricing">
        <div className="container">
          <Headline
            headline="Pricing"
            id="pricing"
            des="Check our Services package"
          />
          <div className="row">
            <PriceCard
              color="#FF6331"
              Graphic={true}
              SEO={true}
              WebDe={true}
              uIUx={true}
              HC={true}
              Business={false}
              headline="Basic"
              price="$70"
              des="Xd And PSD Design"
            />
            
            <PriceCard
              color="#803AFB"
              Graphic={true}
              SEO={true}
              WebDe={true}
              uIUx={true}
              HC={true}
              Business={false}
              headline="Standard"
              price="$100"
              des="Xd And PSD Design"
            />
            <PriceCard
              color="#F5276C"
              Graphic={true}
              SEO={true}
              WebDe={true}
              uIUx={true}
              HC={true}
              Business={false}
              headline="Premium"
              price="$150"
              des="Xd And PSD Design"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Pricing;
