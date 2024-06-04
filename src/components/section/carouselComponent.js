import React from "react";
import defaultData from "../../data/data";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const carouselValue = () => {
    return defaultData.slice(0, 3).map((item, index) => {
      return (
        <div
          className={"carousel-item " + (item.id === 1 && "active ")}
          key={index}
        >
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>
          </svg>
          <div className="container">
            <div className="carousel-caption">
              <h1>{item.title}</h1>
              <p>{item.content.slice(0, 160)}..</p>
              <p>
                <Link to={"/" + item.title} className="btn btn-lg btn-primary">
                  ادامه مطلب
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div
        id="myCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">{carouselValue()}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">قبلی</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">بعدی</span>
        </button>
      </div>
    </React.Fragment>
  );
};
export default CarouselComponent;
