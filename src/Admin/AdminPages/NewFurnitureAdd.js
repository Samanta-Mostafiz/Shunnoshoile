import React, { useState } from "react";
import { toast } from "react-toastify";

const NewFurnitureAdd = () => {
  // const productCategory = [
  //   {
  //     name: "bed",
  //     id: "01 ",
  //   },
  //   {
  //     name: "sofa",
  //     id: "02 ",
  //   },
  //   {
  //     name: "gaming",
  //     id: "03 ",
  //   },
  //   {
  //     name: "dining",
  //     id: "4 ",
  //   },
  //   {
  //     name: "almary",
  //     id: "05 ",
  //   },
  //   {
  //     name: "mirror",
  //     id: "06 ",
  //   },
  //];

  // const [categoryValue, setText] = useState(productCategory?.name);
  // const Sallar = (e) => {
  //   console.log("fucje", e?.target?.innerHtml);
  //   setText(e?.target?.innerText);
  // };
  // all For submite
  const SubmiteFor = (event) => {
    event.preventDefault();
    const name = event?.target?.name?.value;
    const image = event?.target?.image?.value;
    const cetagory = event?.target?.cetagory?.value;
    const price = event?.target?.price?.value;
    const Paragrap = event?.target?.details?.value;

    const product = { name, image, price, Paragrap, cetagory };

    fetch(`http://localhost:5000/addProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // navigat(prevLocation, { replace: true });
        toast.success("Data Created Successfully");
        // toast.success("send email verifiy link to visite");
      })
      .catch((err) => toast.error(err));
    // console.log(name, price, image, categoryValue, details);
  };

  return (
    <div className="addFurniture pb-5">
      <form onSubmit={SubmiteFor}>
        <fieldset className="w-75 px-0 px-md-5 mx-auto pt-5">
          <legend className="text-center text-uppercase">
            New Product add field
          </legend>
          <div class="mb-3">
            <label htmlFor="disabledTextInput" class="For-label">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="disabledTextInput"
              class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto"
              placeholder="Product Name"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="disabledTextInput" class="For-label">
              Product Image
            </label>
            <input
              type="text"
              name="image"
              id="disabledTextInput"
              class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto"
              placeholder="Product image"
            />
          </div>
          <div class="mb-3">
            {/* <label htmlFor="disabledSelect" class="For-label">
              Funiture Categorys
            </label> */}
            <div class="mb-3">
              <label htmlFor="disabledTextInput" class="For-label">
                saree,panjabi,couple,kurti,shawl,hijab
              </label>
              <input
                type="text"
                name="cetagory"
                id="disabledTextInput"
                class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto"
                placeholder="Product Category"
              />
            </div>
            {/* <select
              onChange={Sallar}
              name="category"
              id="disabledSelect"
              class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto bg-success text-white"
            >
              {productCategory?.map((names) => (
                <>
                  <option key={names?.id}>{names?.name}</option>
                </>
              ))}

            </select> */}
          </div>
          <div class="mb-3">
            <label htmlFor="disabledTextInput" class="For-label">
              Product Price
            </label>
            <input
              type="text"
              name="price"
              id="disabledTextInput"
              class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto"
              placeholder="Product Price"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="disabledTextInput" class="For-group">
              Product Details
            </label>
            <textarea
              name="details"
              class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto"
              id="exampleForControlTextarea1"
              rows="3"
              placeholder="Product Details"
            ></textarea>
          </div>
          <div class="mb-3">
            <div class="For-check">
              <input
                class="For-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
              />
              <label class="For-check-label" htmlFor="disabledFieldsetCheck">
                Can't check this
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-primary w-25 mx-auto py-3 px-3"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default NewFurnitureAdd;
