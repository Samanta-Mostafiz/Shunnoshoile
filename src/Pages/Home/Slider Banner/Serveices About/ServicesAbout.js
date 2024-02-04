import React from 'react';
import { FaBiking, FaCar, FaRandom, FaRoute, FaShippingFast, FaShoppingCart } from 'react-icons/fa';
import './ServiceAbout.css'

const ServicesAbout = () => {
    return (
        <>
            {/* <!-- About section --> */}
            <section className="servicesAbout">
                <div className="container-fluid justify-content-center about">
                    <h1 className="text-center Larg_Text">Reasons to shop with us</h1>
                    <h6 className="text-center Small_Text pt-2">Dictum varius duis at consectetur lorem donec. Nisi lacus sed viverra<br />
                        tellus in hac. Fusce id velit ut tortor pretium viverra.</h6>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-lg-3 md-col-4 col-sm-6 col-12">
                            <div className="icon-box">
                                <i className="fa-regular"><FaRandom></FaRandom></i>
                                <h3>30 Days returns</h3>
                                <p>If a buyer inFors you within 30 days of receipt,<br ></br> of the item that they wish to return the item.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 md-col-4 col-sm-6 col-12">
                            <div className="icon-box box">
                                <i className="fa-regular"> <FaShippingFast></FaShippingFast></i>
                                <h3>Same day delivery</h3>
                                <p>Same-day shipping means that a customer's order will ship out on the same day the order is placed.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 md-col-4 col-sm-6 col-12">
                            <div className="icon-box box">
                                <i className="fa-regular"><FaShoppingCart /></i>
                                <h3>Secure checkout</h3>
                                <p> Сheckout is a process htmlFor the payment of a specific product or service your booking porduct</p>
                            </div>
                        </div>

                        <div className="col-lg-3 md-col-4 col-sm-6 col-12">
                            <div className="icon-box box">
                                <i className="fa-regular"><FaRoute /></i>
                                <h3>Fast customer support</h3>
                                <p>Customer support is that customer support teams support a product,service teams provide service.</p>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
            {/* <!-- About section end --> */}
        </>
    );
};

export default ServicesAbout;