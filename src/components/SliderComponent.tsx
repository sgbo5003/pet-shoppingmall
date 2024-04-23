import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        zIndex: 1,
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        zIndex: 1,
        left: "10px",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  //   centerMode: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderComponent = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="image/sliderImg1.jpg" alt="슬라이더 이미지1" />
        </div>
        <div>
          <img src="image/sliderImg2.jpg" alt="슬라이더 이미지2" />
        </div>
        <div>
          <img src="image/sliderImg3.jpg" alt="슬라이더 이미지3" />
        </div>
        <div>
          <img src="image/sliderImg4.jpg" alt="슬라이더 이미지4" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
