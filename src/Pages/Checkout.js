import React from 'react'
import {Link} from 'react-router-dom';
import watch from "../images/watch.jpg"

const Checkout = () => {
  return (
    <>
        <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Click Cart</h3>
                           
                            <h4 className="title total">Contact Information</h4>
                            <p className="user-details total">
                                saranga pathirana (sarangapathi2000@gmail.com)
                            </p>
                            <h4 className="mb-3">Shipping Address</h4>
                            <form 
                            action=""
                            className="d-flex gap-15 flex-wrap justify-content-between">
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="First Name" className="form-control" />
                                </div>
                                <div className="flex-grow-1"> 
                                    <input type="text" placeholder="Last Name"  className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Address"  className="form-control" />
                                </div>
                                <div className="w-100">
                                    <input type="text" placeholder="Apartment, suite, etc (optional)"  className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="City"  className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Province"  className="form-control" />
                                </div>
                                <div className="flex-grow-1">
                                    <input type="text" placeholder="Postal code"  className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/Cart" className="text-dark">Return to Cart</Link>
                                        <Link to="/Cart"></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="border-bottom py-4">
                            <div className="d-flex gap-10 mb-2 align-items-center">
                            <div className="w-75 d-flex gap-10">
                            <div className="w-25 position-relative">
                                <span 
                                style={{top:"-10px", right: "2px" }}
                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                    1
                                </span>
                                <img className="img-fluid" src={watch} alt="product" /></div>
                            <div>
                                <h5 className="total-price">dsdsa</h5>
                                <p className="total-price">s / addadad</p>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="total">Rs 1000</h5>
                        </div>
                            </div>
                        </div>
                        <div className="border-bottom py-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="total">Subtotal</p>
                                <p className="total-price">Rs 1000</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">Shipping</p>
                                <p className="mb-0 total-price">Rs 500</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-botom py-4">
                            <h4 className="total">Total</h4>
                            <h5 className="total-price">Rs 1500</h5>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Checkout