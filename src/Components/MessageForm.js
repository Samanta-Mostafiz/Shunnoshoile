import React from "react";

const MessageForm = () => {
  return (
    <>
      <section
        // data-aos="fade-up"
        // data-aos-anchor-placement="top-center"
        // data-aos-duration="1000"
        className="my-4"
      >
        <h1 className="text-center Larg_Text pt-2">
          Any InForation Collection Our Clothes Zone
        </h1>
        <h6 className="text-center Small_Text px-5 pb-4">
          Please Write This From Message Field. <br></br> What's your Problem ?
        </h6>
        <form
          className=""
          action="https://getform.io/f/9b6c087a-4646-4acf-a030-ff7a9eed4209"
          method="POST"
        >
          <div className="row mx-md-3 mx-2">
            <div className="col-lg-7 col-md-6 d-flex justify-content-center mb-5 mb-md-0">
              <img
                className="contactimg p-3 bg-black"
                src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-18637.jpg?w=2000"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="Fore p-5 mx-auto ">
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
    </>
  );
};

export default MessageForm;
