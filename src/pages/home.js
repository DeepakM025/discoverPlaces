import React, { Component } from "react";
import Sidebar from "../components/sidebar";

class home extends Component {
  constructor() {
    super();
    this.state = {
      gridView: 1,
      selectedItems: 0,
    };
    this.changeView = this.changeView.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }
  changeView() {
    this.setState({
      gridView: !this.state.gridView,
      selectedItems: 0,
    });
    let elem_one = document.getElementsByClassName("places__item selected");
    for (var i = 0; i < elem_one.length; i++) {
      elem_one[i].classList.remove("selected");
    }
    let elem_two = document.getElementsByClassName("places__listitem selected");
    for (var k = 0; k < elem_two.length; k++) {
      elem_two[i].classList.remove("selected");
    }
  }
  selectItem(e) {
    e.preventDefault();
    if (e.currentTarget.classList.value.includes("selected")) {
      e.currentTarget.classList.remove("selected");
      this.setState({
        selectedItems: this.state.selectedItems - 1,
      });
    } else {
      e.currentTarget.classList.add("selected");
      this.setState({
        selectedItems: this.state.selectedItems + 1,
      });
    }
  }
  render() {
    return (
      <div className="mainBody">
        <div className="mob__header">
          <div className="mob__topnav d-flex align-items-center">
            <div className="nav-brand">
              <img src={require("../assets/images/logo.svg")} alt="logo" />
            </div>
            <div className="nav-hamburger ml-auto">
              <img src={require("../assets/images/menu (2).svg")} alt="menu" />
            </div>
          </div>
          <h4>Discover great places to visit</h4>
          <div className="mob__wave"></div>
          <div className="places__switchview ml-auto">
            <ul className="d-flex">
              <li
                className={
                  this.state.gridView ? "grid__view active" : "grid__view"
                }
                onClick={this.changeView}
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                >
                  <title>5C001700-9888-464D-8C20-65F88E232032</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="st-d.home--hover"
                      transform="translate(-1330.000000, -52.000000)"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    >
                      <g
                        id="grid-list-view"
                        transform="translate(1315.000000, 37.000000)"
                      >
                        <g
                          id="grid-view-icon"
                          transform="translate(16.000000, 16.000000)"
                        >
                          <rect
                            id="Rectangle"
                            x="0"
                            y="0"
                            width="7"
                            height="7"
                          ></rect>
                          <rect
                            id="Rectangle"
                            x="11"
                            y="0"
                            width="7"
                            height="7"
                          ></rect>
                          <rect
                            id="Rectangle"
                            x="11"
                            y="11"
                            width="7"
                            height="7"
                          ></rect>
                          <rect
                            id="Rectangle"
                            x="0"
                            y="11"
                            width="7"
                            height="7"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
              <li
                className={
                  this.state.gridView ? "list__view" : "list__view active"
                }
                onClick={this.changeView}
              >
                <svg
                  width="21px"
                  height="15px"
                  viewBox="0 0 21 15"
                  version="1.1"
                >
                  <title>75442974-372A-4F4A-9A1D-68A095936801</title>
                  <defs>
                    <filter id="filter-1">
                      <feColorMatrix
                        in="SourceGraphic"
                        type="matrix"
                        values="0 0 0 0 0.772549 0 0 0 0 0.827451 0 0 0 0 0.909804 0 0 0 1.000000 0"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="st-d.home--hover"
                      transform="translate(-1374.000000, -54.000000)"
                    >
                      <g
                        id="list-view-icon"
                        transform="translate(1315.000000, 37.000000)"
                        filter="url(#filter-1)"
                      >
                        <g transform="translate(60.000000, 18.000000)">
                          <line
                            x1="5.495"
                            y1="0.5"
                            x2="18.495"
                            y2="0.5"
                            id="Path"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          ></line>
                          <line
                            x1="5.495"
                            y1="6.5"
                            x2="18.495"
                            y2="6.5"
                            id="Path"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          ></line>
                          <line
                            x1="5.495"
                            y1="12.5"
                            x2="18.495"
                            y2="12.5"
                            id="Path"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          ></line>
                          <line
                            x1="0.495"
                            y1="0.5"
                            x2="0.505"
                            y2="0.5"
                            id="Path"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          ></line>
                          <line
                            x1="0.495"
                            y1="6.5"
                            x2="0.505"
                            y2="6.5"
                            id="Path"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          ></line>
                          <line
                            x1="0.495"
                            y1="12.5"
                            x2="0.505"
                            y2="12.5"
                            id="Path"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                          ></line>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <Sidebar />
        <div className="places">
          <div className="placess__head d-flex align-items-center">
            <h2>Discover great places to visit</h2>
            <div className="places__switchview ml-auto">
              <ul className="d-flex">
                <li
                  className={
                    this.state.gridView ? "grid__view active" : "grid__view"
                  }
                  onClick={this.changeView}
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    version="1.1"
                  >
                    <title>5C001700-9888-464D-8C20-65F88E232032</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        id="st-d.home--hover"
                        transform="translate(-1330.000000, -52.000000)"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      >
                        <g
                          id="grid-list-view"
                          transform="translate(1315.000000, 37.000000)"
                        >
                          <g
                            id="grid-view-icon"
                            transform="translate(16.000000, 16.000000)"
                          >
                            <rect
                              id="Rectangle"
                              x="0"
                              y="0"
                              width="7"
                              height="7"
                            ></rect>
                            <rect
                              id="Rectangle"
                              x="11"
                              y="0"
                              width="7"
                              height="7"
                            ></rect>
                            <rect
                              id="Rectangle"
                              x="11"
                              y="11"
                              width="7"
                              height="7"
                            ></rect>
                            <rect
                              id="Rectangle"
                              x="0"
                              y="11"
                              width="7"
                              height="7"
                            ></rect>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </li>
                <li
                  className={
                    this.state.gridView ? "list__view" : "list__view active"
                  }
                  onClick={this.changeView}
                >
                  <svg
                    width="21px"
                    height="15px"
                    viewBox="0 0 21 15"
                    version="1.1"
                  >
                    <title>75442974-372A-4F4A-9A1D-68A095936801</title>
                    <defs>
                      <filter id="filter-1">
                        <feColorMatrix
                          in="SourceGraphic"
                          type="matrix"
                          values="0 0 0 0 0.772549 0 0 0 0 0.827451 0 0 0 0 0.909804 0 0 0 1.000000 0"
                        ></feColorMatrix>
                      </filter>
                    </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        id="st-d.home--hover"
                        transform="translate(-1374.000000, -54.000000)"
                      >
                        <g
                          id="list-view-icon"
                          transform="translate(1315.000000, 37.000000)"
                          filter="url(#filter-1)"
                        >
                          <g transform="translate(60.000000, 18.000000)">
                            <line
                              x1="5.495"
                              y1="0.5"
                              x2="18.495"
                              y2="0.5"
                              id="Path"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            ></line>
                            <line
                              x1="5.495"
                              y1="6.5"
                              x2="18.495"
                              y2="6.5"
                              id="Path"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            ></line>
                            <line
                              x1="5.495"
                              y1="12.5"
                              x2="18.495"
                              y2="12.5"
                              id="Path"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            ></line>
                            <line
                              x1="0.495"
                              y1="0.5"
                              x2="0.505"
                              y2="0.5"
                              id="Path"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            ></line>
                            <line
                              x1="0.495"
                              y1="6.5"
                              x2="0.505"
                              y2="6.5"
                              id="Path"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            ></line>
                            <line
                              x1="0.495"
                              y1="12.5"
                              x2="0.505"
                              y2="12.5"
                              id="Path"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            ></line>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              this.state.gridView ? "places__flex" : "places__flex d-none"
            }
          >
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/57AC222D-8C81-4A6E-81FC-70589404ACBF.png")}
                  alt="57AC222D-8C81-4A6E-81FC-70589404ACBF"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Wellington</span>
                <span>Tianjin</span>
              </div>
              <div className="places__desc">
                <h4>Khartoum</h4>
                <p>Aenean lacinia bibendum nulla sed consectetur.</p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/5C249899-7B56-4D6E-958E-F5FC0D45BF08.png")}
                  alt="5C249899-7B56-4D6E-958E-F5FC0D45BF08"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Salt Lake City</span>
                <span>Seville</span>
              </div>
              <div className="places__desc">
                <h4>Santa Clara</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/D30D0253-0186-4B81-A529-83EDDCCA8C32.png")}
                  alt="D30D0253-0186-4B81-A529-83EDDCCA8C32"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Puebla</span>
              </div>
              <div className="places__desc">
                <h4>Bengaluru</h4>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li className="shortlisted">
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/557A0CE8-53C2-4CED-BDE8-C012F2735BCE.png")}
                  alt="557A0CE8-53C2-4CED-BDE8-C012F2735BCE"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Sacramento</span>
                <span>Osaka</span>
                <span>Astana</span>
              </div>
              <div className="places__desc">
                <h4>Portland</h4>
                <p>
                  Tortor mauris condimentum nibh, ut fermentum massa justo sit
                  amet risus.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/32780C6C-A30B-43F7-AF99-B17BCD3AA9FF.png")}
                  alt="32780C6C-A30B-43F7-AF99-B17BCD3AA9FF"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Belgrade</span>
                <span>Cali</span>
                <span>Stockholm</span>
              </div>
              <div className="places__desc">
                <h4>Fairbanks</h4>
                <p>
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/92577067-D5AD-4166-99A2-9FFC0A31312E.png")}
                  alt="92577067-D5AD-4166-99A2-9FFC0A31312E"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Trondheim</span>
                <span>Xian</span>
              </div>
              <div className="places__desc">
                <h4>Sofia</h4>
                <p>
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/B7481CC0-0C36-485B-9C35-DA8638532AAD.png")}
                  alt="B7481CC0-0C36-485B-9C35-DA8638532AAD"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Aarhus</span>
                <span>Ankara</span>
              </div>
              <div className="places__desc">
                <h4>Belfast</h4>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec ullamcorper nulla non metus
                  auctor fringilla.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__item" onClick={this.selectItem}>
              <div className="places__itemimg">
                <img
                  src={require("../assets/images/C38B917B-484C-4CEB-9B99-3AB3F206EB0C.png")}
                  alt="C38B917B-484C-4CEB-9B99-3AB3F206EB0C"
                />
                <div className="places__selectbox"></div>
              </div>
              <div className="places__tags d-flex">
                <span>Sylhet</span>
              </div>
              <div className="places__desc">
                <h4>Pune</h4>
                <p>
                  Mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus.
                </p>
              </div>
              <div className="places__action text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={
              this.state.gridView
                ? "places__listview d-none"
                : "places__listview"
            }
          >
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/57AC222D-8C81-4A6E-81FC-70589404ACBF.png")}
                  alt="57AC222D-8C81-4A6E-81FC-70589404ACBF"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Khartoum</h4>
                <p>Aenean lacinia bibendum nulla sed consectetur.</p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/5C249899-7B56-4D6E-958E-F5FC0D45BF08.png")}
                  alt="5C249899-7B56-4D6E-958E-F5FC0D45BF08"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Santa Clara</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/D30D0253-0186-4B81-A529-83EDDCCA8C32.png")}
                  alt="D30D0253-0186-4B81-A529-83EDDCCA8C32"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Bengaluru</h4>
                <p>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li className="shortlisted">
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/557A0CE8-53C2-4CED-BDE8-C012F2735BCE.png")}
                  alt="557A0CE8-53C2-4CED-BDE8-C012F2735BCE"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Portland</h4>
                <p>
                  Tortor mauris condimentum nibh, ut fermentum massa justo sit
                  amet risus.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/32780C6C-A30B-43F7-AF99-B17BCD3AA9FF.png")}
                  alt="32780C6C-A30B-43F7-AF99-B17BCD3AA9FF"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Fairbanks</h4>
                <p>
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/92577067-D5AD-4166-99A2-9FFC0A31312E.png")}
                  alt="92577067-D5AD-4166-99A2-9FFC0A31312E"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Sofia</h4>
                <p>
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/B7481CC0-0C36-485B-9C35-DA8638532AAD.png")}
                  alt="B7481CC0-0C36-485B-9C35-DA8638532AAD"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Belfast</h4>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec ullamcorper nulla non metus
                  auctor fringilla.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="places__listitem" onClick={this.selectItem}>
              <div className="places__listimg">
                <img
                  src={require("../assets/images/C38B917B-484C-4CEB-9B99-3AB3F206EB0C.png")}
                  alt="C38B917B-484C-4CEB-9B99-3AB3F206EB0C"
                />
                <div className="places__listselectbox"></div>
              </div>
              <div className="places__listdesc">
                <h4>Pune</h4>
                <p>
                  Mauris condimentum nibh, ut fermentum massa justo sit amet
                  risus.
                </p>
              </div>
              <div className="places__listaction text-right">
                <ul className="mb-0 list-style-none p-0 d-flex">
                  <li>
                    <img
                      src={require("../assets/images/message-square.svg")}
                      alt="message-square"
                    />
                  </li>
                  <li>
                    <svg width="24px" height="21px" viewBox="0 0 24 21" version="1.1">
                      <title>6B3787F8-EFED-4B3D-ADD0-5CA5990E9EEC</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        <g id="st-d.home--selected" transform="translate(-408.000000, -441.000000)" stroke="#C5D3E8" strokeWidth="2">
                          <g id="card" transform="translate(140.000000, 124.000000)">
                            <g id="Group-2" transform="translate(225.000000, 312.000000)">
                              <g id="heart" transform="translate(44.000000, 6.000000)">
                                <path d="M19.84,1.61 C18.8084758,0.577991468 17.409138,-0.00182562119 15.95,-0.00182562119 C14.490862,-0.00182562119 13.0915242,0.577991468 12.06,1.61 L11,2.67 L9.94,1.61 C7.79161231,-0.538387622 4.30838771,-0.538387596 2.16000006,1.61000006 C0.0116124038,3.75838771 0.0116123778,7.24161231 2.16,9.39 L3.22,10.45 L11,18.23 L18.78,10.45 L19.84,9.39 C20.8720085,8.3584758 21.4518256,6.95913803 21.4518256,5.5 C21.4518256,4.04086197 20.8720085,2.6415242 19.84,1.61 Z" id="Path"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={
              this.state.selectedItems
                ? "places__selected"
                : "places__selected d-none"
            }
          >
            <span>
              <img src={require("../assets/images/Group.svg")} alt="Group" />
            </span>
            <p className="mb-0">{this.state.selectedItems} item selected</p>
            <span>
              <img
                src={require("../assets/images/heart (1).svg")}
                alt="heart (1)"
              />
            </span>
            <span>
              <img
                src={require("../assets/images/Group (1).svg")}
                alt="Group (1)"
              />
            </span>
          </div>
        </div>
      </div >
    );
  }
}

export default home;
