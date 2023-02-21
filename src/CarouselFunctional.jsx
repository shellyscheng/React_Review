import { useState } from "react";

const Carousel = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="carousel">
      <img data-testid="hero" src={images[activeIdx]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            onClick={(e) => setActiveIdx(+e.target.dataset.index)}
            data-index={index}
            data-testid={`thumbnail${index}`}
            key={photo}
            src={photo}
            className={index === activeIdx ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
};

export default Carousel;
