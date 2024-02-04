import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/UserContext";
import "./Admin.css";

const AdminPages = () => {
  const { user, loding } = useContext(AuthContext);

  const navigat = useNavigate();
  const prevLocation = navigat?.state?.from?.pathname || "/";

  useEffect(() => {
    // console.log(user);
  }, [user]);

  const url = `http://localhost:5000/users/${user?.email}`;
  const {
    data: adminUser = [],
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

  if (isLoading || loding) {
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

  // function refreshPage() {
  //     window.location.reload();
  // }
  const refreshAllPages = () => {
    navigat(prevLocation, { replace: true });
  };

  return (
    <>
      {adminUser?.email && adminUser?.email === "samantha1@gmail.com" ? (
        <>
          <div className="admin_panel text-white py-4">
            <h5 onClick={refreshAllPages}>
              <h5 className="position-absolute top-5 start-0 ms-2 btn btn-info">
                Back{" "}
              </h5>
            </h5>
            <h5 className="text-center d-none d-md-block">
              Welcome Admin _
              <span className="text-danger ">
                {adminUser?.name?.slice(0, 15)}
              </span>
              _ You Can be Access Admin panel.
            </h5>
            <p className="text-center d-md-none mt-5">
              Welcome Admin _
              <span className="text-danger ">
                {adminUser?.name?.slice(0, 15)}
              </span>
              _ <br></br> You Can be Access.
            </p>
            <div className="admindiv">
              <div className="d-flex justify-content-center mx-md-5 mx-1 mt-4">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link
                      to={`/admin/new_furniture_add`}
                      className=" btn btn-primary mt-2"
                    >
                      New Product Add
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={`/admin/discount_furniture`}
                      className=" btn btn-warning ms-2 mt-2"
                    >
                      Discount Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={`/admin/alluser`}
                      className="btn btn-outline-primary ms-2 mt-2"
                    >
                      All Users
                    </Link>
                  </li>
                </ul>
                {user?.email ? (
                  <>
                    <div className="nav-item ms-3 mt-2 ms-lg-0 mt-lg-0">
                      <div className="profile">
                        <img
                          className="protfolioimg img-fluid"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="nav-item ms-3 mt-2 ms-lg-0 mt-lg-0">
                    <div className="profile">
                      <img
                        className="protfolioimg img-fluid"
                        src=" https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="NotAdmin text-white py-4 w-100 h-100 d-flex bg-black justify-content-center align-items-center">
            <div className="d-block w-100 mx-auto">
              <h5 className="text-center">
                You are not an Admin. please leve now this page!
              </h5>
              <br></br>
              <div className="d-flex d-flex justify-content-center">
                <Link to={"/"}>
                  <h5 className=" btn btn-info ">Go Back </h5>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminPages;
