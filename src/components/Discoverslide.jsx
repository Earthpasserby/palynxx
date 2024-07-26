import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";


const Discoverslide = () => {

 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
       },
     },
   ],
 };

  return (
    <>
      <Container className="hero-3 Slidemobile">
        <Row className="justify-content-center text-center">
          <h4>
            <span>Explore</span> Your City
          </h4>
          <img
            src="./underline1.png"
            alt="palynx-img"
            className="underline1 img-fluid"
          />
          <p>
            Discover new places, hidden gems, and popular hotspots in your city.
          </p>
        </Row>
        <Row className="justify-content-center">
          <Slider {...settings}>
            <Col md={4} xs={12} className="card-2headcol">
              <div className="card-2">
                <div className="Btn-3">
                  <img
                    src="./view.png"
                    alt="palynx-img"
                    className="img-fluid"
                  />
                  <button className="btn-2">Romantic</button>
                </div>
                <div className="card-2Cont">
                  <h6>Sea & Romantic dinner</h6>
                  <pre>New York, NY - August 12</pre>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12} className="card-2headcol">
              <div className="card-2">
                <div className="Btn-3">
                  <img
                    src="./yatch.png"
                    alt="palynx-img"
                    className="img-fluid"
                  />
                  <button className="btn-3">Party</button>
                </div>
                <div className="card-2Cont">
                  <h6>Yacht day & Friend’s party</h6>
                  <pre>New York, NY - August 18</pre>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12} className="card-2headcol">
              <div className="card-2">
                <div className="Btn-3">
                  <img
                    src="./bale.png"
                    alt="palynx-img"
                    className="img-fluid"
                  />
                  <button className="btn-4">Dance classes</button>
                </div>
                <div className="card-2Cont">
                  <h6>Beginner & Intermediate Ballet Class</h6>
                  <pre>New York, NY - August 24</pre>
                </div>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
    </>
  );
}
export default Discoverslide