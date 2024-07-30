import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import { Link} from "react-router-dom";


const Error = () => {
  return (
    <>
      <Container>
        <Row className="Error">
          <Col xs={12} md={12} className="errorCont">
            <div className="text-center">
              <h6>Oops!</h6>
              <p>You are lost</p>
              <img src="./Error.png" alt="Error-img" className="img-fluid " />
            </div>

            <Link to="/" className="d-flex justify-content-center  error-Btn">
              <button className="Error-btn">Go Home</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Error;
