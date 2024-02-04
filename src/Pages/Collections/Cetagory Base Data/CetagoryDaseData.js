import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const CetagoryDaseData = () => {
  //React useLoaderData hoke uplode product
  const products = useLoaderData();
  console.log(products);
  return (
    <>
      <div className="allProduct px-lg-5 d-block">
        <div className="container-fluid justify-content-center align-items-center d-flex px-lg-5">
          <h4 className="collections2022 text-center">
            Fresh{" "}
            <span className="text-uppercase text-primary">
              {products[0]?.cetagory}
            </span>{" "}
            Clothes Collection 2024
          </h4>
        </div>
        <div className="row mt-3 px-3 px-md-0 ">
          {products?.map((product) => (
            <>
              <div key={product?._id} className="col-lg-3 col-md-4">
                <div className="products-box">
                  <img className="w-100" src={product?.image} alt="" />
                  <div className="products-details">
                    <div className="p-top d-flex justify-content-between">
                      <span className="d-block Name">{product?.name}</span>
                      <span className="d-block Prices">{product?.price}</span>
                    </div>
                    <div className="p-bottom d-flex justify-content-between">
                      <div className="wrapper">
                        <span className="cta bg-primary">
                          <Link
                            to={`/view_Product/${product?._id}`}
                            className="text-white pointer"
                          >
                            View Details
                          </Link>
                        </span>
                      </div>
                      <div className="wrapper">
                        <span className="cta">
                          <span className="text-white pointer">
                            Add to Card
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CetagoryDaseData;
