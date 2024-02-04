import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="About container-fluid mt-5  d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <div className="aboutImg">
              <img
                className="image"
                src="https://i.ibb.co/zf5XyP1/sa.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7 d-flex justify-content-center align-items-center">
            <div className="Mdabout">
              <h1 className=" Larg_Text py-0">About Miss</h1>
              <h6 className="Small_Text pb-1 fs-5">Mst. Samanta Mostafiz</h6>
              <p>
                Hi, As you already know my name is Samanta.I am a student of the
                Islamic Unuversity,Kushtia department of Computer Science And
                Engineering.
                <br />
                <br />
                My goal is to be an expert in full-stack web development.
                Constantly, In addition to my junior development, I am
                Developing new skills or knowledge in website development. I
                want my future to be a full-stack web developer and I have the
                creative ability to update anything. I want to work in this
                position in your company. Honest and hard work gives me the
                courage to do work better.
                <br />
                <br />
                In my previous role, I contributed leadership, teamwork, and
                layout design toward team efforts and web development
                improvements. I am progressive-minded and in tune with new
                developments in my field. I have proven to be effective and
                collaborative with strong interpersonal talents.
              </p>
              <button className="btn btn-primary mx-auto py-3 px-4 d-flex justify-content-center">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
