import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 p-sm-5 border-top">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div className="row" style={{ lineHeight: "1.8", fontSize: "18px" }}>
        <div className="col-12 col-sm-6 p-3 p-sm-5 text-center">
          <img
            src="assets\ratneshKshirsagar.jpg"
            alt="ratneshKshirsagarImage"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h1 className="fs-3 mt-3">Ratnesh Kshirsagar</h1>
          <p className="text-muted">Full-Stack Web Developer</p>
        </div>
        <div className="col-12 col-sm-6 p-3 p-sm-5 text-muted">
          <p>
            Ratnesh Kshirsagar is a final-year Electronics and Telecommunication
            Engineering student, actively enhancing his skills in full stack web
            development. He has a strong foundation in Java, data structures and
            algorithms.
          </p>
          <p>
            He is passionate about technology and continually seeks to enhance
            his skills and apply them in practical scenarios.
          </p>
          <p>
            Connect on{" "}
            <a href="https://www.linkedin.com/in/ratnesh1253/">Linkedin</a> /{" "}
            <a href="https://x.com/ratnesh1253">Twitter</a> /{" "}
            <a href="mailto:ratneshkshirsagar1253@gmail.com">Email</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
