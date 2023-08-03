import { useSelector } from "@/stores";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = (props: any) => {
  const { dataFromSubParent } = props;
  const { isFixNavbar, isDarkHeader } = useSelector((state) => state.settings);
  return (
    <div>
      <div
        id="page_top"
        // className={isFixNavbar ? "sticky-top" : "" + dataFromParent === 'dark' ? 'section-body top_dark' : 'section-body'}
        className={`section-body ${isFixNavbar ? "sticky-top" : ""} ${
          isDarkHeader ? "top_dark" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="page-header">
            <div className="left">
              <h1 className="page-title">{dataFromSubParent}</h1>
              <select className="custom-select">
                <option>Year</option>
                <option>Month</option>
                <option>Week</option>
              </select>
              <div className="input-group xs-hide">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="right">
              <ul className="nav nav-pills">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">
                      <img
                        className="w20 mr-2"
                        src="../assets/images/flags/us.svg"
                        alt="fake_url"
                      />
                      English
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item">
                      <img
                        className="w20 mr-2"
                        src="../assets/images/flags/es.svg"
                        alt="fake_url"
                      />
                      Spanish
                    </a>
                    <a className="dropdown-item">
                      <img
                        className="w20 mr-2"
                        src="../assets/images/flags/jp.svg"
                        alt="fake_url"
                      />
                      japanese
                    </a>
                    <a className="dropdown-item">
                      <img
                        className="w20 mr-2"
                        src="../assets/images/flags/bl.svg"
                        alt="fake_url"
                      />
                      France
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">
                      <i className="dropdown-icon fa fa-file-excel-o" /> MS
                      Excel
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-icon fa fa-file-word-o" /> MS Word
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-icon fa fa-file-pdf-o" /> PDF
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Project
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item">Graphics Design</a>
                    <a className="dropdown-item">Angular Admin</a>
                    <a className="dropdown-item">PSD to HTML</a>
                    <a className="dropdown-item">iOs App Development</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item">Home Development</a>
                    <a className="dropdown-item">New Blog post</a>
                  </div>
                </li>
              </ul>
              <div className="notification d-flex">
                <div className="dropdown d-flex">
                  <a
                    href="/#"
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-envelope" />
                    <span className="badge badge-success nav-unread" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul className="right_chat list-unstyled w250 p-0">
                      <li className="online">
                        <a href="fake_url">
                          <div className="media">
                            <img
                              className="media-object "
                              src="../assets/images/xs/avatar4.jpg"
                              alt="fake_url"
                            />
                            <div className="media-body">
                              <span className="name">Donald Gardner</span>
                              <span className="message">Designer, Blogger</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="online">
                        <a href="fake_url">
                          <div className="media">
                            <img
                              className="media-object "
                              src="../assets/images/xs/avatar5.jpg"
                              alt="fake_url"
                            />
                            <div className="media-body">
                              <span className="name">Wendy Keen</span>
                              <span className="message">Java Developer</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="offline">
                        <a href="fake_url">
                          <div className="media">
                            <img
                              className="media-object "
                              src="../assets/images/xs/avatar2.jpg"
                              alt="fake_url"
                            />
                            <div className="media-body">
                              <span className="name">Matt Rosales</span>
                              <span className="message">CEO, Epic Theme</span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="online">
                        <a href="fake_url">
                          <div className="media">
                            <img
                              className="media-object "
                              src="../assets/images/xs/avatar3.jpg"
                              alt="fake_url"
                            />
                            <div className="media-body">
                              <span className="name">Phillip Smith</span>
                              <span className="message">
                                Writter, Mag Editor
                              </span>
                              <span className="badge badge-outline status" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item text-center text-muted-dark readall">
                      Mark all as read
                    </a>
                  </div>
                </div>
                <div className="dropdown d-flex">
                  <a
                    href="/#"
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-bell" />
                    <span className="badge badge-primary nav-unread" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul className="list-unstyled feeds_widget">
                      <li>
                        <div className="feeds-left">
                          <i className="fa fa-check" />
                        </div>
                        <div className="feeds-body">
                          <h4 className="title text-danger">
                            Issue Fixed{" "}
                            <small className="float-right text-muted">
                              11:05
                            </small>
                          </h4>
                          <small>
                            WE have fix all Design bug with Responsive
                          </small>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <i className="fa fa-user" />
                        </div>
                        <div className="feeds-body">
                          <h4 className="title">
                            New User{" "}
                            <small className="float-right text-muted">
                              10:45
                            </small>
                          </h4>
                          <small>I feel great! Thanks team</small>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <i className="fa fa-thumbs-o-up" />
                        </div>
                        <div className="feeds-body">
                          <h4 className="title">
                            7 New Feedback{" "}
                            <small className="float-right text-muted">
                              Today
                            </small>
                          </h4>
                          <small>
                            It will give a smart finishing to your site
                          </small>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <i className="fa fa-question-circle" />
                        </div>
                        <div className="feeds-body">
                          <h4 className="title text-warning">
                            Server Warning{" "}
                            <small className="float-right text-muted">
                              10:50
                            </small>
                          </h4>
                          <small>Your connection is not private</small>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <i className="fa fa-shopping-cart" />
                        </div>
                        <div className="feeds-body">
                          <h4 className="title">
                            7 New Orders{" "}
                            <small className="float-right text-muted">
                              11:35
                            </small>
                          </h4>
                          <small>You received a new oder from Tina.</small>
                        </div>
                      </li>
                    </ul>
                    <div className="dropdown-divider" />
                    <a
                      href="fake_url"
                      className="dropdown-item text-center text-muted-dark readall"
                    >
                      Mark all as read
                    </a>
                  </div>
                </div>
                <div className="dropdown d-flex">
                  <a
                    href="/#"
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-user" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <NavLink to="/profile" className="dropdown-item">
                      <i className="dropdown-icon fe fe-user" /> Profile
                    </NavLink>
                    <a className="dropdown-item">
                      <i className="dropdown-icon fe fe-settings" /> Settings
                    </a>
                    <a className="dropdown-item">
                      <span className="float-right">
                        <span className="badge badge-primary">6</span>
                      </span>
                      <i className="dropdown-icon fe fe-mail" /> Inbox
                    </a>
                    <a className="dropdown-item">
                      <i className="dropdown-icon fe fe-send" /> Message
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item">
                      <i className="dropdown-icon fe fe-help-circle" /> Need
                      help?
                    </a>
                    <NavLink to="/login" className="dropdown-item">
                      <i className="dropdown-icon fe fe-log-out" /> Sign out
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
