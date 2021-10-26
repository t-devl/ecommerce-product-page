import "./Gallery.scss";
import image1 from "../../images/image-product-1.jpg";
import image2 from "../../images/image-product-2.jpg";
import image3 from "../../images/image-product-3.jpg";
import image4 from "../../images/image-product-4.jpg";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";
import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
import { useState } from "react";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState<number>(1);

  const previousImage = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImage < 4) {
      setCurrentImage(currentImage + 1);
    }
  };

  const changeCurrentImage = (index: number) => {
    if (currentImage !== index) {
      setCurrentImage(index);
    }
  };

  return (
    <div className="gallery">
      <div className="gallery__display">
        <button
          className="gallery__arrow-btn gallery__arrow-btn--left"
          onClick={previousImage}
        >
          <img className="gallery__arrow-icon" src={previous}></img>
        </button>
        <div
          className="gallery__images-container"
          style={{
            transform: `translateX(calc(-100% * ${currentImage - 1}))`,
          }}
        >
          <img className="gallery__image" src={image1}></img>
          <img className="gallery__image" src={image2}></img>
          <img className="gallery__image" src={image3}></img>
          <img className="gallery__image" src={image4}></img>
        </div>
        <button
          className="gallery__arrow-btn gallery__arrow-btn--right"
          onClick={nextImage}
        >
          <img className="gallery__arrow-icon" src={next}></img>
        </button>
      </div>
      <div className="gallery__thumbnails-container">
        <div
          className={`gallery__thumbnail ${
            currentImage === 1 ? "gallery__thumbnail--active" : ""
          }`}
          onClick={() => setCurrentImage(1)}
        >
          <img className="gallery__thumbnail-image" src={thumbnail1}></img>
        </div>

        <div
          className={`gallery__thumbnail ${
            currentImage === 2 ? "gallery__thumbnail--active" : ""
          }`}
          onClick={() => setCurrentImage(2)}
        >
          <img className="gallery__thumbnail-image" src={thumbnail2}></img>
        </div>

        <div
          className={`gallery__thumbnail ${
            currentImage === 3 ? "gallery__thumbnail--active" : ""
          }`}
          onClick={() => setCurrentImage(3)}
        >
          <img className="gallery__thumbnail-image" src={thumbnail3}></img>
        </div>

        <div
          className={`gallery__thumbnail ${
            currentImage === 4 ? "gallery__thumbnail--active" : ""
          }`}
          onClick={() => setCurrentImage(4)}
        >
          <img className="gallery__thumbnail-image" src={thumbnail4}></img>
        </div>
      </div>
    </div>
  );
}
