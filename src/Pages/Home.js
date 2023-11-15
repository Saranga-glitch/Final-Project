import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Container from './Container';
import { services } from '../Utills/Data';

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From Rs.150,000</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                src="images/catbanner-01.jpg"
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From Rs.150,000</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                src="images/catbanner-02.jpg"
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From Rs.150,000</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                src="images/catbanner-03.jpg"
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From Rs.150,000</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                src="images/catbanner-04.jpg"
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From Rs.150,000</p>
                </div>
              </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {
                  services?.map((i, j) => {
                    return (
                      <div className="d-flex align-items-center gap-15" key={j}>
                        <img src={i.image} alt= "services" />
                        <div>
                          <h6>{i.title}</h6>
                          <p className="mb-0">{i.tagline}</p>
                        </div>
                        </div>
                      )
                  }) 
                }
              </div>
            </div>
          </div>
    </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div> 
            <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            </div>
          </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
    </>
  )
}

export default Home