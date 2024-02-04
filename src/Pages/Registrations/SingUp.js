import React, { useContext } from "react";
import "./SingUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/UserContext";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const {
    register,
    formState: { errors, isDirty, dirtyFields },
    handleSubmit,
  } = useForm({ mode: "onChange", defaultValues: { password: "" } });
  const {
    user,
    singUpUser,
    singInUser,
    htmlForGetPass,
    userProfile,
    logOutUser,
    emailVerification,
    autoGoogleLogin,
    loding,
  } = useContext(AuthContext);
  // ---image bb key--
  const imageHostKey = "a4bb8f75e2bd9577943205a667f63c6b";

  //location part
  const navigat = useNavigate();
  const location = useLocation();
  const prevLocation = location?.state?.from?.pathname || "/";

  // -------------For inForation ----------------
  const onSubmit = (data) => {
    const { email, name, password } = data;

    // ----set image bb url----
    const images = data.img[0];
    const formData = new FormData();
    formData.append("image", images);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    const url2 = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // console.log(imageHostKey); //https://api.imgbb.com/1/upload?key
    fetch(url2, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData?.success) {
          console.log("url", imageData?.data?.display_url);
          const userImage = imageData?.data?.display_url;
          console.log(userImage);
          singUpUser(email, password)
            .then((result) => {
              console.log(result?.user);

              userProfile(name, userImage)
                .then((result) => {
                  console.log("updat", userImage);

                  emailVerification()
                    .then((result) => {
                      // ---navigate
                      addDatabaseUser(name, userImage, email);
                    })
                    .catch((err) => {
                      toast.error(err.message);
                      console.log(err);
                    });
                })
                .catch((err) => {
                  toast.error(err.message);
                  console.log(err);
                });
            })
            .catch((err) => {
              toast.error(err.message);
              console.log(err);
            });
        }
      });
  };
  // Google sing in outo
  const autoSingInGoogle = () => {
    autoGoogleLogin()
      .then((result) => {
        addDatabaseUser(
          result?.user?.displayName,
          result?.user?.photoURL,
          result?.user?.email
        );
        navigat(prevLocation, { replace: true });
      })
      .catch((err) => toast.error(err));
  };

  // set database user inForaions
  const addDatabaseUser = (name, userImage, email) => {
    // const role = "admin"
    const user = { name, userImage, email };
    console.log(user);
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
        <div className="wrapperss">
          <div className="d-block">
            <div type="ForFile" className="logoss">
              <img
                type="ForFile"
                src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png"
                alt=""
              />
              <input
                name="img"
                className="For-control mt-3 overflow-hidden w-100 "
                type="file"
                {...register("img", {
                  required: "your profile image",
                })}
                id="ForFile"
                required
              />
            </div>
            <div className="text-center mt-4 name">User Profile photo</div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-3 mt-3">
              <div className="For-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="text"
                  name="userName"
                  {...register("userName", {
                    required: "you full userName",
                  })}
                  id="userName"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="For-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
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

              {/* -------error message------------- */}
              {errors?.password ? (
                <p role="alert" className="d-flex">
                  <span className="me-1">❌</span>
                  {errors?.password?.message}
                </p>
              ) : (
                dirtyFields.password && (
                  <p className="">✅ your password be strong</p>
                )
              )}
              {/* --------error massage end---------- */}
              <input className="btn mt-3" type="submit" />
            </form>
            <div className="text-center fs-6">
              <button onClick={autoSingInGoogle} className="googleBtn">
                {" "}
                <FaGoogle /> Google
              </button>{" "}
              or{" "}
              <Link to={`/login`}>
                {" "}
                <button className="googleBtn"> Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
