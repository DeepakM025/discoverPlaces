import React, { Component } from "react";
import { Link } from "react-router-dom";


class header extends Component {
  render() {
    return (
      <div className="nav_bar">
        <div className="container">
          <div className="row align-items-center py-3 m-0">
            <div className="nav_start">
              <Link to="/" className="nav_brand">
                <div className="nav_brand_wrap">
                  <p>
                    City <br /> Weather
                </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default header;
