import "./Lightbox.scss";
import image1 from "../../images/image-product-1.jpg";
import image2 from "../../images/image-product-2.jpg";
import image3 from "../../images/image-product-3.jpg";
import image4 from "../../images/image-product-4.jpg";
import thumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../images/image-product-4-thumbnail.jpg";
import { useState } from "react";

interface Props {
  imageClicked: number;
  setIsActive: (bool: boolean) => void;
}

export default function Lightbox({ imageClicked, setIsActive }: Props) {
  const [currentImage, setCurrentImage] = useState<number>(imageClicked);

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
    <div className="lightbox-container">
      <div className="lightbox">
        <button
          className="lightbox__close-btn"
          onClick={() => setIsActive(false)}
        >
          <svg
            className="lightbox__close-icon"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button
          className="lightbox__arrow-btn lightbox__arrow-btn--left"
          onClick={previousImage}
        >
          <svg
            className="lightbox__arrow-icon"
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
        <div className="lightbox__display">
          <div
            className="lightbox__images-container"
            style={{
              transform: `translateX(calc(-100% * ${currentImage - 1}))`,
            }}
          >
            <img className="lightbox__image" src={image1}></img>
            <img className="lightbox__image" src={image2}></img>
            <img className="lightbox__image" src={image3}></img>
            <img className="lightbox__image" src={image4}></img>
          </div>
        </div>
        <button
          className="lightbox__arrow-btn lightbox__arrow-btn--right"
          onClick={nextImage}
        >
          <svg
            className="lightbox__arrow-icon"
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
        <div className="lightbox__thumbnails-container">
          <div
            className={`lightbox__thumbnail ${
              currentImage === 1 ? "lightbox__thumbnail--active" : ""
            }`}
            onClick={() => setCurrentImage(1)}
          >
            <img className="lightbox__thumbnail-image" src={thumbnail1}></img>
          </div>

          <div
            className={`lightbox__thumbnail ${
              currentImage === 2 ? "lightbox__thumbnail--active" : ""
            }`}
            onClick={() => setCurrentImage(2)}
          >
            <img className="lightbox__thumbnail-image" src={thumbnail2}></img>
          </div>

          <div
            className={`lightbox__thumbnail ${
              currentImage === 3 ? "lightbox__thumbnail--active" : ""
            }`}
            onClick={() => setCurrentImage(3)}
          >
            <img className="lightbox__thumbnail-image" src={thumbnail3}></img>
          </div>

          <div
            className={`lightbox__thumbnail ${
              currentImage === 4 ? "lightbox__thumbnail--active" : ""
            }`}
            onClick={() => setCurrentImage(4)}
          >
            <img className="lightbox__thumbnail-image" src={thumbnail4}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
