import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-dots {
    bottom: 45px;
  }
  .slick-dots li {
    margin: 2px 3px;
    width: auto;
    height: auto;
  }
  .slick-dots li button:before {
    opacity: 0;
    display: none;
  }
  .slick-dots li button {
    width: 100%;
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    overflow: hidden;
    border: none;
    background: rgba(255, 255, 255, 0.6);
    color: #000;
    font-size: 15px;
  }
  .slick-dots li.slick-active button {
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{
          ...style,
          zIndex: 1,
          right: "100px",
        }}
        onClick={onClick}
      >
        <img src="image/arrow_next2.png" alt="다음 화살표" />
      </div>
    </>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 1,
        left: "100px",
      }}
      onClick={onClick}
    >
      <img src="image/arrow_prev2.png" alt="이전 화살표" />
    </div>
  );
};

const sliderDotsArray: string[] = [
  "코하주식캔 할인",
  "브릿 고별전",
  "펫스웨트 2L특가",
  "나우테트라 특가",
];

const settings = {
  customPaging: function (i) {
    return <button>{`${sliderDotsArray[i]}`}</button>;
  },
  dots: true,
  dotClass: "",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  //   centerMode: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderComponent = () => {
  return (
    <div className="pb-20">
      <StyledSlider {...settings}>
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
      </StyledSlider>
    </div>
  );
};

export default SliderComponent;
