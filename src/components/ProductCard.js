import React from 'react'
import {Link, useLocation} from "react-router-dom";

const ProductCard = () => {

  return (
    <>
    <div 
      className="col-3">
      <div className="product-card position-relative">
        <fiv className = "wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </fiv>
      <div className="product-image">
          <img 
            src="images/watch.jpg" 
            className="img-fluid"
            alt='product image' />
        </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title"> Kids headphones bulk 10 pack multi colored for students </h5>
                <p className="price">Rs 6500.00</p>
              </div>
      </div>  
    </div>
    <div 
      className="col-3">
      <div className="product-card position-relative">
        <fiv className = "wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </fiv>
      <div className="product-image">
          <img 
            src="images/watch.jpg" 
            className="img-fluid"
            alt='product image' />
        </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title"> Kids headphones bulk 10 pack multi colored for students </h5>
                <p className="price">Rs 6500.00</p>
              </div>
      </div>  
    </div>
    </> 
  )
}

export default ProductCard