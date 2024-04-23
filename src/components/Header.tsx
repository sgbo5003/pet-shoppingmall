import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Header = () => {
  return (
    <div id="header" className="relative w-full">
      <div className="headerTop border-b border-[#eaeaea]">
        <div className="after:clear-both after:block max-w-[1240px] mx-auto my-0">
          <div className="float-left">
            <div className="py-9">
              <a href="#!">
                <img
                  className="w-8 h-8"
                  src="image/shiba.png"
                  alt="홈 이미지"
                />
              </a>
            </div>
          </div>
          <div className="float-right">
            <div>
              <ul>
                <li className="float-left ml-20">
                  <a className="leading-[50px]" href="#!">
                    로그인
                  </a>
                </li>
                <li className="float-left ml-20">
                  <a className="leading-[50px]" href="#!">
                    회원가입
                  </a>
                </li>
                <li className="float-left ml-20">
                  <a className="leading-[50px]" href="#!">
                    마이페이지
                  </a>
                </li>
                <li className="float-left ml-20">
                  <a className="leading-[50px]" href="#!">
                    장바구니
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="headerContent border-b border-[#eaeaea]">
        <div className="max-w-[1240px] mx-auto my-0 bg-orange-200 h-36"></div>
      </div>
      <div className="headerGnb border-b border-[#eaeaea] h-12">
        <div className="max-w-[1240px] mx-auto my-0 h-full">
          <div className="h-full">
            <ul className="flex items-center justify-around h-full">
              <li>
                <a href="#!">강아지 상품</a>
              </li>
              <li>
                <a href="#!">게시판</a>
              </li>
              <li>
                <a href="#!">리뷰</a>
              </li>
              <li>
                <a href="#!">방문 신청</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-96">
        <Slider {...settings}>
          <div>
            <h3 className="bg-green-700 text-center leading-[670px]">1</h3>
          </div>
          <div>
            <h3 className="bg-green-700 text-center leading-[670px]">2</h3>
          </div>
          <div>
            <h3 className="bg-green-700 text-center leading-[670px]">3</h3>
          </div>
          <div>
            <h3 className="bg-green-700 text-center leading-[670px]">4</h3>
          </div>
          <div>
            <h3 className="bg-green-700 text-center leading-[670px]">5</h3>
          </div>
          <div>
            <h3 className="bg-green-700 text-center leading-[670px]">6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Header;
