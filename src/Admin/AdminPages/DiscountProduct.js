import React, { useState } from 'react';




const DiscountProduct = () => {

    const productCategory = [
        {
            name: "sare",
            id: "01 "
        },
        {
            name: "shawl",
            id: "02 "
        },
        {
            name: "hijab",
            id: "03 "
        },
        {
            name: "panjabi",
            id: "4 "
        },
        {
            name: "couple set",
            id: "05 "
        },
        {
            name: "kurti",
            id: "06 "
        },
    ]


    const [categoryValue, setText] = useState(productCategory?.name)

    // all For submite
    const SubmiteFor2 = (event) => {
        event.preventDefault()
    }

    const Sallar = (e) => {
        console.log(e?.target?.innerText);

    }

    return (
        <div className='addFurniture pb-2'>

            <form onSubmit={SubmiteFor2}>
                <fieldset className='w-75 px-0 px-md-5 mx-auto pt-5'>
                    <legend className='text-center text-uppercase'>Discount sare add field</legend>
                    <div class="mb-3">
                        <label htmlFor="disabledTextInput" class="For-label">Product Name</label>
                        <input type="text" id="disabledTextInput" class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto" placeholder="Product Name" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="disabledTextInput" class="For-label">Product Image</label>
                        <input type="text" id="disabledTextInput" class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto" placeholder="Product Name" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="disabledSelect" class="For-label">Product Categorys</label>
                        <select onChange={Sallar} id="disabledSelect" class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto bg-success text-white">
                            {
                                productCategory?.map(names =>
                                    <>
                                        <option key={names?.id} >{names?.name}</option>
                                    </>

                                )
                            }

                        </select>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="disabledTextInput" class="For-label">Product Price</label>
                        <input type="text" id="disabledTextInput" class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto" placeholder="Product Price" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="disabledTextInput" class="For-group">Product Details</label>
                        <textarea class="For-group pb-2 rounded-3 px-1 pt-2 w-100 justify-center flex mx-auto" id="exampleForControlTextarea1" rows="3" placeholder='Product Details'></textarea>
                    </div>
                    <div class="mb-3">
                        <div class="For-check">
                            <input class="For-check-input" type="checkbox" id="disabledFieldsetCheck" />
                            <label class="For-check-label" htmlFor="disabledFieldsetCheck">
                                Can't check this
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary w-25 mx-auto py-3 px-3">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};


export default DiscountProduct;