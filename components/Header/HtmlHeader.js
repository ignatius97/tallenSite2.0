import React from "react";
import config from '../config/config'
import NextLink from "next/link"
import { Link } from "@material-ui/core";

function HtmlHeader() {
  return (
    <div>
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <div class="site-navbar-wrap">
        <div class="site-navbar-top">
          <div class="container py-3">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="d-flex mr-auto">
                  <a href="#" class="d-flex align-items-center mr-4">
                    <span class="icon-envelope mr-2"></span>
                    <span class="d-none d-md-inline-block">
                      Tallen@Tallen.Tech
                    </span>
                  </a>
                  <a href="#" class="d-flex align-items-center mr-auto">
                    <span class="icon-phone mr-2"></span>
                    <span class="d-none d-md-inline-block">
                      +1 234 4567 8910
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-6 text-right">
                <div class="mr-auto">
                  <a href="#" class="p-2 pl-0">
                    <span class="icon-twitter"></span>
                  </a>
                  <a href="#" class="p-2 pl-0">
                    <span class="icon-facebook"></span>
                  </a>
                  <a href="#" class="p-2 pl-0">
                    <span class="icon-linkedin"></span>
                  </a>
                  <a href="#" class="p-2 pl-0">
                    <span class="icon-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="site-navbar site-navbar-target js-sticky-header">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-2">
                <h1 class="my-0 site-logo">
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
              <div class="col-10">
                <nav class="site-navigation text-right" role="navigation">
                  <div class="container">
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a
                        href="#"
                        class="site-menu-toggle js-menu-toggle text-white"
                      >
                        <span class="icon-menu h3"></span>
                      </a>
                    </div>

                    <ul class="site-menu main-menu js-clone-nav d-none d-lg-block">
                      <li class="active">
                        <NextLink href="/" passHref class="nav-link">
                          <Link>Home</Link>
                        </NextLink>
                      </li>
                      <li class="has-children">
                        <a href="#" class="nav-link">
                          Services
                        </a>
                        <ul class="dropdown arrow-top">
                          <li>
                            <NextLink href="/build" passHref class="nav-link">
                              <Link>Build</Link>
                            </NextLink>
                          </li>
                          <li>
                            <NextLink href="/retail" passHref class="nav-link">
                              <Link>Retail</Link>
                            </NextLink>
                          </li>
                          <li>
                            <NextLink href="/custom" passHref class="nav-link">
                              <Link>Custom</Link>
                            </NextLink>
                          </li>
                          <li>
                            <NextLink href="/other" passHref class="nav-link">
                              <Link>Others</Link>
                            </NextLink>
                          </li>

                          <li class="has-children">
                            <a href="#">Others</a>
                            <ul class="dropdown">
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
                        <NextLink href="/contact" passHref class="nav-link">
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
