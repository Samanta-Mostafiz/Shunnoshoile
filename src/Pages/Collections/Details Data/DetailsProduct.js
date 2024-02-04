import React, { useContext, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useLoaderData, useNavigate } from "react-router";
import img1 from "../../../Assent/Background Image/Bad2.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/UserContext";
import { toast } from "react-toastify";

const DetailsProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const ProductDetails = useLoaderData();

  const [products, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/Detail_product/${ProductDetails?.cetagory}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  //=============MongoDb post Add to Card==========================
  const AddToCard = (product) => {
    const cardProduct = {
      name: product?.name,
      img: product?.image,
      Prices: product?.price,
      email: user?.email,
      Paragrap: product?.Details,
    };

    fetch(`http://localhost:5000/addCard`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cardProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Add to Card Lisht", data);
        }
      });
  };

  function refreshPage() {
    window.location.reload();
  }

  // console.log(products);
  const Reloade = (ProductDetails) => {
    refreshPage2();
  };

  function refreshPage2() {
    navigate(`/payment/${ProductDetails?._id}`);
  }

  return (
    <>
      <section className="Detais">
        <div className="Product_Details mx-md-5">
          <div className="row ">
            <div className="col-lg-6 ">
              <div className="Detailsimg SkillCArd border10px">
                <img className="w-full" src={ProductDetails?.image} alt="" />
              </div>
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center item-center mt-5 mt-lg-0">
              <div className="Details_title px-2">
                <h4>Product Name : {ProductDetails?.name}</h4>
                <p>Details : {ProductDetails?.Details?.slice(0, 400)}</p>
                <br />
                <h5>Price : {ProductDetails?.price}</h5>
                <br />
                <br />
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-info py-2 px-5 detailsbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => AddToCard(ProductDetails)}
                    className="btn btn-outline-info py-2 px-5 detailsbtn"
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade mt-3"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                {/* =============frome field=============== */}

                <div className="card">
                  <img
                    className="card-img-top p-1"
                    src={ProductDetails?.image}
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title text-black">
                        {" "}
                        {ProductDetails?.name}
                      </h5>
                      <h5 className="card-title text-black">
                        Price : {ProductDetails?.price}
                      </h5>
                    </div>
                    <p className="card-text text-black pt-2">
                      {ProductDetails?.Details?.slice(0, 200)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <Link
                  to={`/payment/${ProductDetails?._id}`}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  {" "}
                  <button
                    onClick={() => Reloade(ProductDetails)}
                    type="button"
                    className="btn btn-primary"
                  >
                    {" "}
                    Get Payment{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center ">
          <marquee className="marquee" direction="left">
            This Year 2024 Our Shop All products{" "}
            <span className="text-warning">10% Discount</span> &{" "}
            <span className="text-warning"> 30% Cash Back</span>. Our shop Buy
            products from.
            <span className="text-danger"> Our Happy Customar ❤❤</span> .
          </marquee>
        </div>

        {/* ===========Card Scrolling========= */}
        <div className="ThreeProduct pb-5">
          <div className="row mx-md-5 mx-2">
            {products?.map((product) => (
              <>
                <div key={product?._id} className="col-lg-4 col-md-4 my-3">
                  <div className="products-box">
                    <img className="w-100" src={product?.image} alt="" />
                    <div className="products-details mx-md-2">
                      <div className="p-top d-flex justify-content-between">
                        <span className="d-block Name">{product?.name}</span>
                        <span className="d-block Prices">{product?.price}</span>
                      </div>
                      <div className="p-bottom d-flex justify-content-between">
                        <div className="wrapper mt-1">
                          <span className="btn btn-outline-primary">
                            <Link
                              to={`/view_Product/${product?._id}`}
                              className="text-white pointer"
                            >
                              View Details
                            </Link>
                          </span>
                        </div>
                        <div className="wrapper mt-1">
                          <span className="btn btn-outline-success">
                            <span className="text-white pointer">Add Card</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}

            <div className="d-flex justify-content-center mt-5">
              <Link
                to={`/cetagory-data/${ProductDetails?.cetagory}`}
                className="btn btn-primary px-md-5 py-md-3"
              >
                More Product
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsProduct;
