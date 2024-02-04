import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/UserContext";

const LogIn = () => {
  const {
    register,
    formState: { errors, isDirty, dirtyFields },
    handleSubmit,
  } = useForm({ mode: "onChange", defaultValues: { password: "" } });

  const {
    user,
    singInUser,
    emailVerification,
    autoGoogleLogin,
    htmlForGetPass,
  } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  //location part
  const navigat = useNavigate();
  const location = useLocation();
  const prevLocation = location?.state?.from?.pathname || "/";

  // ----frome input fild handel btn------------
  const onSubmit = (data) => {
    const { email, password } = data;
    // sing in with email or password
    singInUser(email, password)
      .then((result) => {
        // setLogInUserEmail(result?.user?.email)
        toast.success("You are successfully logIN");
        navigat(prevLocation, { replace: true });
      })
      .catch((err) => toast.error(err));
  };
  // console.log(dirtyFields);

  //reste password email notification
  const restePasswords = () => {
    console.log("htmlForget password", userEmail);
    if (userEmail) {
      htmlForGetPass(userEmail)
        .then(() => {
          toast.success("please chack you email or setup password .");
        })
        .catch((err) => {
          toast.error("Your email doesn't Match !");
        });
    } else {
      toast.warn("please write your currect email");
    }
  };

  const autoSingInGoogle = () => {
    autoGoogleLogin()
      .then((result) => {
        addDatabaseUser(
          result?.user?.displayName,
          result?.user?.photoURL,
          result?.user?.email
        );
        toast.success("User Auto Login With Google !");
        navigat(prevLocation, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // set database user inForaions
  const addDatabaseUser = (name, userImage, email) => {
    // const role = "admin"
    const user = { name, userImage, email };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        navigat(prevLocation, { replace: true });
        toast.success("Registration successfully");
        toast.success("send email verifiy link to visite");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <>
      <div className="SingUp">
        <div className="wrapperss ">
          <div className="d-block">
            <div className="logoss">
              <img
                type="ForFile"
                src="http://localhost:3000/static/media/logo.186730c98810fd2c5d6e.gif"
                alt=""
              />
            </div>
            <div className="text-center mt-4 name">Welcome</div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-3 mt-3">
              <div className="For-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
                    onBlur: (event) => setUserEmail(event.target.value),
                  })}
                  id="userEmail"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="For-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 characters or longer",
                    },
                    maxLength: {
                      value: 16,
                      message: "password must be under the 16 characters !",
                    },
                  })}
                  id="pwd"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="text-center fs-6">
                <Link to={``} className="forgetpasss" onClick={restePasswords}>
                  Forget password?
                </Link>
              </div>

              {/* --------error massage end---------- */}
              <input className="btn mt-3" type="submit" />
            </form>

            <div className="text-center fs-6">
              <button onClick={autoSingInGoogle} className="googleBtn">
                {" "}
                <FaGoogle /> Google
              </button>{" "}
              or{" "}
              <Link to={`/singup`}>
                {" "}
                <button className="googleBtn"> Sing up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
