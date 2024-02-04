import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "./Upcoming.css";

const UpcomingProduct = () => {
  const url = `http://localhost:5000/upcomin_furnituers`;

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return (
      <div>
        <div className="Loding">
          <img
            src="https://static.spotapps.co/assets/widgets/loading.gif"
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="upcoming">
        <div className="d-flex justify-content-center ">
          <marquee className="marquees pt-1" direction="left">
            <h5>
              {" "}
              This Year 2024 Our Shop UpComing{" "}
              <span className="text-primary">ClothesCollections</span> &{" "}
              <span className="text-warning"> Best Discount </span> Offer
              <span className="text-danger"> Our Happy Customer ❤❤</span> .
            </h5>
          </marquee>
        </div>

        <div className="row  px-3 px-md-0 mx-1 mx-md-4">
          {products?.map((product) => (
            <>
              <div key={product?._id} className="col-lg-4 col-md-4">
                <div className="products-box">
                  <PhotoProvider>
                    <PhotoView src={product?.image}>
                      <img className="w-100 " src={product?.image} alt="" />
                    </PhotoView>
                  </PhotoProvider>

                  <div className="products-details">
                    <div className="p-top d-flex justify-content-between">
                      <span className="d-block Name">{product?.name}</span>
                      <span className="d-block Prices">{product?.price}</span>
                    </div>
                    <div className="p-bottom d-flex justify-content-between mt-2">
                      <div className="wrapper ">
                        <span className="bg-success p-1">
                          <span className="text-white pointer">
                            {product?.Date}
                          </span>
                        </span>
                      </div>
                      <div className="wrapper">
                        <span className="bg-primary p-1">
                          <span className="text-white pointer">
                            {product?.off} Discount
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

export default UpcomingProduct;
