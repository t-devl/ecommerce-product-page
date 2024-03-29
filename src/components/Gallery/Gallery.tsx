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
import Lightbox from "../Lightbox/Lightbox";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState<number>(1);
  const [isLightboxActive, setIsLightboxActive] = useState<boolean>(false);

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

  return (
    <div className="gallery">
      {isLightboxActive ? (
        <Lightbox
          imageClicked={currentImage}
          setIsActive={setIsLightboxActive}
        ></Lightbox>
      ) : (
        ""
      )}

      <div className="gallery__display">
        <button
          className="gallery__arrow-btn gallery__arrow-btn--left"
          onClick={previousImage}
        >
          <svg
            className="gallery__arrow-icon"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div
          className="gallery__images-container"
          style={{
            transform: `translateX(calc(-100% * ${currentImage - 1}))`,
          }}
          onClick={() => setIsLightboxActive(true)}
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
          <svg
            className="gallery__arrow-icon"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
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
