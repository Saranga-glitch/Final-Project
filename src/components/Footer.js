import React from "react";
import {BsLinkedin, BsGithub, BsInstagram} from "react-icons/bs";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <h2 className="mb-0 text-white">Click Cart</h2>
              </div>
            </div>
          </div>
        </div>  
             
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">Lakshman Building, <br />
                No.07 2nd Cross St, Galle <br />Pin code: 80000
                </address>
                <a href="tel:+94 716048720" className="mt-3 d-block mb-1 text-white">
                  +94 716048720
                </a>
                <a href="mailto:sarangapathi2000@gmail.com" className="mt-2 d-block mb-0 text-white">
                  sarangapathi2000@gmail.com
                </a>
                <div className="Social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" to="#"><BsLinkedin className="fs-4" /></a>
                  <a className="text-white" to="#"><BsGithub className="fs-4" /></a>
                  <a className="text-white" to="#"><BsInstagram className="fs-4" /></a>
                </div>
              </div>
            </div>
           
            <div className="col-3">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container.xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Created by Saranga Pathirana
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer