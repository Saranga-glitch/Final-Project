import React from 'react'
import {Link, useLocation} from "react-router-dom";
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"

const ProductCard = () => {

  return (
    <>
    <div 
      className="col-3">
      <Link to=":id" className="product-card position-relative">
        <div className = "wishlist-icon position-absolute">
          <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
        </div>
      <div className="product-image">
          <img 
            src={watch} 
            className="img-fluid"
            alt='product image' />
        </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title"> Kids headphones bulk 10 pack multi colored for students </h5>
                <p className="price">Rs 6500.00</p>
              </div>
      </Link>  
    </div>
    <div 
      className="col-3">
      <Link to=":id" className="product-card position-relative">
        <div className = "wishlist-icon position-absolute">
        <button className="border-0 bg-transparent"><img src={wish} alt="wishlist" /></button>
        </div>
      <div className="product-image">
          <img 
            src={watch} 
            className="img-fluid"
            alt='product image' />
        </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title"> Kids headphones bulk 10 pack multi colored for students </h5>
                <p className="price">Rs 6500.00</p>
              </div>
      </Link>  
    </div>
    </> 
  )
}

export default ProductCard