import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
      <footer>
        <div
          className="container-fluid text-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="py-5">
            <h2 className="text-light py-3">Interested in working with me?</h2>
            <Link to="/contact">
              <button className="btn btn-outline-light btn-lg">
                Let's Talk
              </button>
            </Link>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 py-3">
              <h5 className="text-info pb-3">More Links</h5>
              <Link to="/blogs" className="text-light d-block">
                Blogs
              </Link>
              <Link to="/" className="text-light d-block">
                Home
              </Link>
              <Link to="/projects" className="text-light d-block">
                Projects
              </Link>
              <Link to="/contact" className="text-light d-block">
                Contact me
              </Link>
              <Link to="/write-a-recommendation" className="text-light d-block">
                Write a recommendation <i className="fas fa-heart"></i>
              </Link>
            </div>
            <div className="col-12 col-md-4 text-justify text-light py-3">
              <p>
                Hi! I am Abdur Raheem, a web designer/developer focused on
                crafting great web experiences. Designing and Coding have been
                my passion since the days I started working with computers but I
                found myself into web design/development since 2021. I enjoy
                creating beautifully designed, intuitive and functional
                websites. I can create beautiful, usable, professional websites
                using the latest technologies for you or your business.
              </p>
            </div>
            <div className="col-12 col-md-4 py-3">
              <h5 className="text-info pb-3">Social</h5>
              <a href="https://www.facebook.com/abdur.raheem.526438/">
                <i className="fab fa-facebook-square h1 text-light d-block"></i>
              </a>
              <a href="https://www.instagram.com/_abi__ar/">
                <i className="fab fa-instagram h1 text-light d-block"></i>
              </a>
              <a href="mailto:raheemabdur17@gmail.com">
                <i className="fas fa-envelope h1 text-light d-block"></i>
              </a>
            </div>
          </div>
          <div className="py-3 text-muted">
            <p>Copyright © Abdur Raheem 2021</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;