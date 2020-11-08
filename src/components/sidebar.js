import React, { Component } from "react";
import { Link } from "react-router-dom";


class header extends Component {
  render() {
    return (
      <React.Fragment>
        <aside className="navbar nav">
          <Link to="/" className="nav-brand ">
            <img src={require("../assets/images/logo.svg")} alt="logo" className="mb-5" />
          </Link>
          <ul className="nav-items">
            <li className="active mb-5">
              <Link to="/"><img src={require("../assets/images/home.svg")} alt="home" /></Link>
            </li>
            <li className="mb-5">
              <Link to="/"><img src={require("../assets/images/briefcase.svg")} alt="briefcase" /></Link>
            </li>
            <li className="mb-5">
              <Link to="/"><img src={require("../assets/images/compass.svg")} alt="compass" /></Link>
            </li>
            <li className="mb-5">
              <Link to="/"><img src={require("../assets/images/bell.svg")} alt="bell" /></Link>
            </li>
            <li className="mb-5">
              <Link to="/"><img src={require("../assets/images/gear.svg")} alt="gear" /></Link>
            </li>
          </ul>
          <div className="logout">
            <Link to="/">
              <img src={require("../assets/images/log-out.svg")} alt="log-out" />
            </Link>
          </div>
        </aside>
        <div className="mob__menu">
          <ul className="nav-items">
            <li >
              <Link to="/"><img src={require("../assets/images/bell.svg")} alt="bell" /></Link>
            </li>
            <li >
              <Link to="/"><img src={require("../assets/images/briefcase.svg")} alt="briefcase" /></Link>
            </li>
            <li className="active">
              <Link to="/"><img src={require("../assets/images/home.svg")} alt="home" /></Link>
            </li>
            <li >
              <Link to="/"><img src={require("../assets/images/compass.svg")} alt="compass" /></Link>
            </li>
            <li >
              <Link to="/"><img src={require("../assets/images/gear.svg")} alt="gear" /></Link>
            </li>
          </ul>
        </div>
      </React.Fragment>

    );
  }

}

export default header;
