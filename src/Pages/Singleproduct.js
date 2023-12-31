import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {Link} from 'react-router-dom';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from './Container';


const Singleproduct = () => {
  const props = {
    width: 400, 
    height: 600, 
    zoomWidth: 600, 
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
  };

  return (
    <>
    <Meta title= {"Product Name"} />
    <BreadCrumb title='Product Name' />
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
              <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" 
                className="img-fluid" 
                alt="" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" 
                className="img-fluid" 
                alt="" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" 
                className="img-fluid" 
                alt="" />
              </div>
              <div>
                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" 
                className="img-fluid" 
                alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Kids Headphone Bulk 10 Pack Multi Colored For students</h3>
              </div>
              <div className="border-bottom ">
                <p className="price">Rs 20000</p>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input 
                      type="number"  
                      name="" 
                      min={1}
                      max={10}
                      className="form-control"
                      style={{width: "70px"}}
                      id="" />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                  <button className="button border-0 " type ="submit">
                    Add to Cart
                  </button>
                  <button className="button signup">
                    Buy it now
                  </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href=""><TbGitCompare className="fs-5 me-2" /> Add to Compare</a>
                  </div>
                  <div>
                  <a href=""><AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <h4>Description</h4>
            <div className="bg-white p-3">
            <p>
              dadadafdafafafafafafa
            </p>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
      </Container>
    </>
  )
}

export default Singleproduct