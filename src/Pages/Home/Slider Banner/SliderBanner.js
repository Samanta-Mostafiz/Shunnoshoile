import React, { useEffect } from "react";
import "./SlideBanner.css";
import AOS from "aos";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SliderBanner = () => {
  //animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bannerscetion mt-5 mt-md-0 ">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className=""
        >
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active img-gradient"
                data-bs-interval="3000"
              >
                <img
                  src="https://i.ibb.co/bNFBdzK/sa.jpg"
                  className="slide_img img-fluid"
                  alt=""
                />
                <div className="carousel-caption z-50 d-none d-md-block justify-content-center">
                  <div className="title to-centers mt-md-center position-relative ">
                    <h1 className="text-white text-center px-md-5 text-uppercase z-50 ">
                      Celebrating
                      <span className="text-ss">
                        {" "}
                        the essence of our root{" "}
                      </span>{" "}
                      <span className=""> 2023</span>
                      <br />
                    </h1>
                    <div className="px-lg-5">
                      {" "}
                      <p className="text-white text-start small-text px-lg--6 text-center "></p>
                    </div>
                    <br />
                    <Link to={`/allProduct`}>
                      {" "}
                      <button
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="5000"
                        className="glow-on-hover"
                        type="button"
                      >
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="carousel-caption z-50 d-grid d-md-none justify-content-center smTitle">
                  <div className="title top-10 position-relative">
                    <h4 className="text-white px-md-5 text-uppercase z-50 ">
                      best saree brand <br /> in bangladesh <br />
                    </h4>

                    <br />
                    <br />
                    <Link to={`/allProduct`}>
                      <button className="glow-on-hover" type="button">
                        SHOP NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="img-gradient">
                  <img
                    src="https://i.ibb.co/bNFBdzK/sa.jpg"
                    className="slide_img img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="img-gradient">
                  <img
                    src="https://i.ibb.co/bNFBdzK/sa.jpg"
                    className="slide_img img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="img-gradient">
                  <img
                    src="https://i.ibb.co/bNFBdzK/sa.jpg"
                    className="slide_img img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <div className="img-gradient">
                  <img
                    src="https://i.ibb.co/bNFBdzK/sa.jpg"
                    className="slide_img img-fluid"
                    alt=""
                  />
                </div>
              </div>
              {/* FaGenderless */}
            </div>
            <div className="prerantDivBtn">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                >
                  <FaAngleLeft className="priveSlider"></FaAngleLeft>
                </span>
                <span className="visually-hidden icons">Previous</span>
              </button>
              <button
                className="carousel-control-next "
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon position-absolute end-0"
                  aria-hidden="true"
                >
                  {" "}
                  <FaAngleRight className="nextSlider"></FaAngleRight>{" "}
                </span>
                <span className="visually-hidden icons">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderBanner;
