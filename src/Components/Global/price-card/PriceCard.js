import React, { Component } from "react";
import "./PriceCard.scss";
class PriceCard extends Component {
  render() {
    return (
      <div className="col-12 col-sm-12 col-md 4 col-lg-4">
        <div className="price-card">
          <div
            className="header-item"
            style={{ backgroundColor: this.props.color }}
          >
            <h4>{this.props.headline}</h4>
            <span>{this.props.price}</span>
            <br />
            {this.props.des}
          </div>
          <div className="body-item">
            <ul>
              <li>
                {this.props.Graphic ? (
                  <i className="fas fa-check"> </i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
                Graphic Desing
              </li>
              <li>
                {this.props.WebDe ? (
                  <i className="fas fa-check"> </i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
                Web Design
              </li>
              <li>
                {this.props.uIUx ? (
                  <i className="fas fa-check"> </i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
                UI/UX Design{" "}
              </li>
              <li>
                {this.props.HC ? (
                  <i className="fas fa-check"> </i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
                HTML & CSS
              </li>
              <li>
                {this.props.SEO ? (
                  <i className="fas fa-check"> </i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
                SEO Optimize
              </li>
              <li>
                {this.props.Business ? (
                  <i className="fas fa-check"> </i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
                Business Develop
              </li>
            </ul>
            <button style={{ backgroundColor: this.props.color }}>
              choose plan
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default PriceCard;
