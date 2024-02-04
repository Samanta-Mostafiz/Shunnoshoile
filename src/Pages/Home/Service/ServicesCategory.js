import React from "react";
import "./CervicesCategory.css";
import Bad from "../../../Assent/Background Image/orna.jpg";
import Sofa from "../../../Assent/Background Image/kurti.jpg";
import image3 from "../../../Assent/img/asset 6.jpeg";
import Gamming from "../../../Assent/Background Image/saree.jpg";
import Dyning from "../../../Assent/Background Image/couple.jpg";
import Almary from "../../../Assent/Background Image/shawl.jpg";
import Dolpon from "../../../Assent/Background Image/pan.jpg";
// import Dolpon from "../../../Assent/Background Image/";
import Home1 from "../../../Assent/Background Image/Home1.gif";
import Home2 from "../../../Assent/Background Image/Home2.gif";
import Home3 from "../../../Assent/Background Image/Home3.gif";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import About from "../About/About";
import MessageForm from "../../../Components/MessageForm";

const ServicesCategory = () => {
  return (
    <>
      {/* ========================Cetagory base Furniture ==================== */}
      <div className="scetion py-4">
        <h1 className="text-center Larg_Text py-2">Cetegori products</h1>
        <h6 className="text-center Small_Text px-5 pb-4">
          Classic Saree, Kurti and Panjabi collections. <br />
          Proudly designed htmlFor everyday living.
        </h6>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner ml-5 ">
            <div className="carousel-item active" data-bs-interval="2500">
              <div className="row container-fluid d-flex justify-content-center pl-5 w-full mx-auto">
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="d-block me-1">
                    <img className="productImg" src={Gamming} alt="" />
                    <div className="d-flex justify-content-between mt-2 mx-1">
                      <h5 id="responsiveText" className="product_name  ">
                        Saree Collections
                      </h5>
                      <Link
                        to={"/cetagory-data/saree"}
                        className="product_details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="d-block me-1">
                    <img className="productImg" src={Dolpon} alt="" />
                    <div className="d-flex justify-content-between mt-2 mx-1">
                      <h5 id="responsiveText" className="product_name ">
                        Panjabi Collections
                      </h5>
                      <Link
                        to={"/cetagory-data/panjabi"}
                        className="product_details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="d-block me-1">
                    <img className="productImg" src={Almary} alt="" />
                    <div className="d-flex justify-content-between mt-2 mx-1">
                      <h5 id="responsiveText" className="product_name ">
                        Shawl Collections
                      </h5>
                      <Link
                        to={"/cetagory-data/shawl"}
                        className="product_details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <div className="row container-fluid d-flex justify-content-center pl-5">
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="d-block me-1">
                    <img className="productImg" src={Dyning} alt="" />
                    <div className="d-flex justify-content-between mt-2 mx-1">
                      <h5 id="responsiveText" className="product_name ">
                        Couple Set Collections
                      </h5>
                      <Link
                        to={"/cetagory-data/couple"}
                        className="product_details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="d-block me-1">
                    <img className="productImg" src={Bad} alt="" />
                    <div className="d-flex justify-content-between mt-2 mx-1">
                      <h5 id="responsiveText" className="product_name ">
                        Hijab Collections
                      </h5>
                      <Link
                        to={"/cetagory-data/hijab"}
                        className="product_details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="d-block me-1">
                    <img className="productImg" src={Sofa} alt="" />
                    <div className="d-flex justify-content-between mt-2 mx-1">
                      <h5 id="responsiveText" className="product_name ">
                        Kurti Collections
                      </h5>
                      <Link
                        to={"/cetagory-data/kurti"}
                        className="product_details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex smalldiv">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true">
                <FaAngleLeft className="priveSlider"></FaAngleLeft>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true">
                <FaAngleRight className="priveSlider"></FaAngleRight>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================= Future Furniture collection====================== */}
      <section className="description mt-5 px-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="blank"></div>
            </div>
            <div className="col-lg-6 col-12 d-flex ">
              <div className="d-content py-sm-5 w-full">
                <h1>Upcoming Saree collection</h1>
                <p className="py-3 px-1">
                  captavating hearts with tradational elegance,stepping into the
                  legacy of our root.
                </p>
                <Link
                  to={`upcoming`}
                  className="btn btn-primary py-3 fw-semibold "
                >
                  SHOW CLOTHES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==============================Full Home Decoretion ========================== */}
      <section className="FullHome_Decoretion">
        <div className="container">
          <h1 className="text-center Larg_Text py-2">Full CLOTHES Services</h1>
          <h6 className="text-center Small_Text px-5 pb-4">
            Use the following content marketing tips to strengthen <br></br>your
            online presence as a clothes brand.
          </h6>

          <div className="row container-fluid d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="products-boxs">
                <PhotoProvider>
                  <PhotoView src={Home1}>
                    <img className="w-100" src={Home1} alt="" />
                  </PhotoView>
                </PhotoProvider>

                <div className="products-details">
                  <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                    <h4 className="texts">Clothing Service 7</h4>
                    <button
                      className="service_7"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop222"
                    >
                      {" "}
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="products-boxs">
                <PhotoProvider>
                  <PhotoView src={Home3}>
                    <img
                      className="w-100"
                      src={Home3}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>

                <div className="products-details">
                  <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                    <h4 className="texts">Clothing Service 7</h4>
                    <button
                      className="service_7"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop222"
                    >
                      {" "}
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="products-boxs my-sm-3 my-md-0">
                <PhotoProvider>
                  <PhotoView src={Home2}>
                    <img className="w-100" src={Home2} alt="" />
                  </PhotoView>
                </PhotoProvider>

                <div className="products-details">
                  <div className="px-2 d-flex justify-content-between pt-2  justify-content-between pt-2">
                    <h4 className="texts">Clothing Service 12</h4>
                    <button
                      className="service_7"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop222"
                    >
                      {" "}
                      Details
                    </button>
                  </div>
                </div>
              </div>
              {/* ==modal== */}
              <div
                class="modal fade"
                id="staticBackdrop222"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel"></h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h5>This Service have already Booking.</h5>
                      <p>Thank you sir.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Messaging section========== */}
      <section
        // data-aos="fade-up"
        // data-aos-anchor-placement="top-center"
        // data-aos-duration="1000"
        className="my-4"
      >
        <h1 className="text-center Larg_Text pt-2">
          Any Information Collection Our Clothing Zone
        </h1>
        <h6 className="text-center Small_Text px-5 pb-4">
          Please Write This From Message Field. <br></br> What's your Problem ?
        </h6>
        <form
          className=""
          action="https://getFor.io/f/346003ba-86ef-4b17-9fc1-6ebd93a3af1a"
          method="POST"
        >
          <div className="row mx-md-3 mx-2">
            <div className="col-lg-12 col-md-12 ">
              <div className="Fore2 p-5 rounded-4 mx-auto w-full  mx-auto">
                <p className=" text-uppercase text-center text-white">
                  Send Message Here
                </p>

                <div className="block">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your full Name"
                    className="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto"
                    data-temp-mail-org="0"
                    required
                  />
                </div>
                <div className="block py-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="For-group w-100 justify-center flex mx-auto For-group pb-2 rounded-3 px-1 pt-2"
                    data-temp-mail-org="0"
                    required
                  />
                </div>
                <div className="block ">
                  <input
                    name="phone"
                    id="phone"
                    type="number"
                    placeholder="Your Phone Number"
                    className="For-group w-100 justify-center flex mx-auto For-group pb-2 rounded-3 px-1 pt-2"
                    data-temp-mail-org="0"
                    required
                  />
                </div>
                <div className="block">
                  <textarea
                    type="text"
                    name="message"
                    className="textarea textarea-info For-group pb-4 px-1 pt-1  w-100 justify-center flex mx-auto mt-3"
                    placeholder="Message Write Here"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center my-3 ">
                  <button
                    type="submit"
                    className="w-100 mx-auto py-2 btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="Our_client pb-2 pt-5">
        <h1 className="text-center Larg_Text py-0">Our Best Clients</h1>
        <h6 className="text-center Small_Text px-5 pb-4">
          In customer service, context is about capturing the idea, value,
          <br></br> and meaning of the customer's experience
        </h6>
        <div className="container pb-5">
          <div className="row md-px-5 flex justify-content-center">
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <img
                className="client_img"
                src="https://i0.wp.com/andrewmortonfurniture.co.uk/wp-content/uploads/2022/08/logo-png.png?fit=256%2C256&ssl=1"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <img
                className="client_img"
                src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/aa3cc073a17dc88cc7a1b0d037e0541e"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <img
                className="client_img"
                src="https://assets.website-files.com/6193af0ab299822fd9049e56/62826d3780fd1ce1f6cc6632_lav-logo.png"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <img
                className="client_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GfXZyhnwhzohp4dKVlQ30L8SEYOF4PGJpA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <img
                className="client_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObXMBx6HfDXZ8G3Hk7fm2KGiS_mR4AWshog&usqp=CAU"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4">
              <img
                className="client_img"
                src="https://static.vecteezy.com/system/resources/thumbnails/007/796/631/small_2x/furniture-logo-furniture-logo-outline-free-vector.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="all">
                <div className="col-lg-4 col-md-6 col-12">

                    <div className="products-box">
                        <img className='w-100' src={Sofa} alt="" />
                        <div className="products-details">
                            <div className="p-top d-flex justify-content-between pt-2 ">
                                <a className="d-block" href="#">Bolero Sofa</a>
                                <span className="d-block">Details</span>
                            </div>
                            <div className="p-bottom d-flex justify-content-between">
                                <div className="wrapper">
                                    <a className="cta bg-primary" href="#">
                                        <span className='text-white'>View Details</span>

                                    </a>
                                </div>
                                <div className="wrapper">
                                    <a className="cta" href="#">
                                        <span className='text-white'>Add to Card</span>

                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">

                    <div className="products-box">
                        <img className='w-100' src={image3} alt="" />
                        <div className="products-details">
                            <div className="p-top d-flex justify-content-between pt-2 ">
                                <a className="d-block" href="#">Bolero Sofa</a>
                                <span className="d-block">Details</span>
                            </div>
                            <div className="p-bottom d-flex justify-content-between">
                                <div className="wrapper">
                                    <a className="cta bg-primary" href="#">
                                        <span className='text-white'>View Details</span>

                                    </a>
                                </div>
                                <div className="wrapper">
                                    <a className="cta" href="#">
                                        <span className='text-white'>Add to Card</span>

                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
           </div> */}
    </>
  );
};

export default ServicesCategory;
