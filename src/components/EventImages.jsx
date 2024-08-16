import React, { useState } from "react";
import { Col } from "react-bootstrap";

const EventImages = ({ data }) => {
  // State to keep track of the currently selected image
  const [mainImage, setMainImage] = useState(
    data.event_images[0].event_image_url
  );

  // Function to handle side image click
  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <Col xs={12} md={5}>
      <img src={mainImage} alt="event-img" className="event-img" />
      <div className="Main-Img d-flex mt-3">
        {data.event_images.map((image, index) => (
          <div
            className="side-img"
            key={index}
            onClick={() => handleImageClick(image.event_image_url)}
          >
            <img
              src={image.event_image_url}
              alt={`event-img-${index}`}
              className="eventSide-img"
            />
          </div>
        ))}
      </div>
    </Col>
  );
};

export default EventImages;
