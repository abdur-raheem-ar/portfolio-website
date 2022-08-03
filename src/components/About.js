import React from "react";

function About() {
  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="text-info">About</span> Me
        </h1>
        <div className="lead pb-5">
          I can develop the front and back of an app
        </div>
        <div className="row pb-5">
          <div className="col-12 col-md-6 px-5">
            <h5>What I can do?</h5>
            <p className="text-justify">
              Hi! This is Abdur Raheem, a web designer/developer focused on
              crafting great web experiences.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5">
            <h5>What am I doing currently?</h5>
            <p className="text-justify">
              Designing and Coding have been my passion since the days I started
              working with computers but I found myself into web
              design/development since 2019.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5">
            <h5>What do I believe in?</h5>
            <p className="text-justify">
              Living in the digital world, a website is crucial for any
              business. If you have a business and don’t have a website, you are
              probably losing out on opportunities for your business. A website
              can be used to accomplish many different marketing strategies to
              help your business grow.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5">
            <h5>How I can help you?</h5>
            <p className="text-justify">
              I enjoy creating beautifully designed, intuitive and functional
              websites. I would love to develop professional websites using the
              latest technologies for you or your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
