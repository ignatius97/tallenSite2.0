import React from "react";
import config from '../config/config'
import NextLink from "next/link"
import { Link } from "@material-ui/core";

function HtmlHeader() {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="site-navbar-wrap">
        <div className="site-navbar-top">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="d-flex mr-auto">
                  <a href="#" className="d-flex align-items-center mr-4">
                    <span className="icon-envelope mr-2"></span>
                    <span className="d-none d-md-inline-block">
                      Tallen@Tallen.Tech
                    </span>
                  </a>
                  <a href="#" className="d-flex align-items-center mr-auto">
                    <span className="icon-phone mr-2"></span>
                    <span className="d-none d-md-inline-block">
                      +1 234 4567 8910
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-6 text-right">
                <div className="mr-auto">
                  <a href="#" className="p-2 pl-0">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#" className="p-2 pl-0">
                    <span className="icon-facebook"></span>
                  </a>
                  <a href="#" className="p-2 pl-0">
                    <span className="icon-linkedin"></span>
                  </a>
                  <a href="#" className="p-2 pl-0">
                    <span className="icon-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-navbar site-navbar-target js-sticky-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-2">
                <h1 className="my-0 site-logo">
                  <NextLink href="/" passHref>
                    <Link>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img width="40px" src={config.logo} alt="Tallen" />
                        <h1>{config.title}</h1>
                      </div>
                    </Link>
                  </NextLink>
                </h1>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a
                        href="#"
                        className="site-menu-toggle js-menu-toggle text-white"
                      >
                        <span className="icon-menu h3"></span>
                      </a>
                    </div>

                    <ul className="site-menu main-menu js-clone-nav d-none d-lg-block">
                      <li className="active">
                        <NextLink href="/" passHref className="nav-link">
                          <Link>Home</Link>
                        </NextLink>
                      </li>
                      <li className="has-children">
                        <a href="#" className="nav-link">
                          Services
                        </a>
                        <ul className="dropdown arrow-top">
                          <li>
                            <NextLink href="/build" passHref className="nav-link">
                              <Link>Build</Link>
                            </NextLink>
                          </li>
                          <li>
                            <NextLink href="/retail" passHref className="nav-link">
                              <Link>Retail</Link>
                            </NextLink>
                          </li>
                          <li>
                            <NextLink href="/custom" passHref className="nav-link">
                              <Link>Custom</Link>
                            </NextLink>
                          </li>
                          <li>
                            <NextLink href="/other" passHref className="nav-link">
                              <Link>Others</Link>
                            </NextLink>
                          </li>

                          <li className="has-children">
                            <a href="#">Others</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">XD Designs</a>
                              </li>
                              <li>
                                <a href="#">Adobe Designs</a>
                              </li>
                              <li>
                                <a href="#">Menu Three</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NextLink href="/contact" passHref className="nav-link">
                          <Link>Contact Us</Link>
                        </NextLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtmlHeader;
