import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContext/UserContext";

const AdminRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
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

  if (isLoading) {
    return (
      <>
        <div className="Loding">
          <img
            src="https://static.spotapps.co/assets/widgets/loading.gif"
            alt=""
          />
        </div>
      </>
    );
  }

  if (adminUser?.email) {
    return children;
  }

  return <Navigate state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
