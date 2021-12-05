import React from "react";
import config from '../config/config'

function Footer() {
  return (
    <div>
      <footer class="footer-14398 mt-5">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-3">
              <a href="#" class="footer-site-logo">
                {config.title}
                <br/>
                <img width="90px" src={config.logo} alt="Tallen" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                officiis corporis optio natus.{" "}
              </p>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>Services</h3>
              <ul class="list-unstyled links">
                <li>
                  <a href="#">Build</a>
                </li>
                <li>
                  <a href="#">Retail</a>
                </li>
                <li>
                  <a href="#">Custom</a>
                </li>
                <li>
                  <a href="#">XD Design</a>
                </li>
                <li>
                  <a href="#">Adobe Design</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>Press</h3>
              <ul class="list-unstyled links">
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Awards</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Online retail</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 ml-auto">
              <h3>About</h3>
              <ul class="list-unstyled links">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col-12 pb-4">
              <div class="line"></div>
            </div>
            <div class="col-md-6 text-md-left">
              <ul class="list-unstyled link-menu nav-left">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Code of Conduct</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 text-md-right">
              <ul class="list-unstyled social nav-right">
                <li>
                  <a href="#">
                    <span class="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon-pinterest"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="row">
              <div class="col-md-7">
                <p>
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate, fuga. Ex at maxime eum odio quibusdam pariatur
                    expedita explicabo harum! Consectetur ducimus delectus nemo,
                    totam odit!
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
