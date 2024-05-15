import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header" className="relative w-full">
      <div className="headerTop border-b border-[#eaeaea]">
        <div className="after:clear-both after:block max-w-[1240px] mx-auto my-0">
          <div className="float-left">
            <div className="py-9">
              <Link to="/">
                <img
                  className="w-8 h-8"
                  src="image/shiba.png"
                  alt="홈 이미지"
                />
              </Link>
            </div>
          </div>
          <div className="float-right">
            <div>
              <ul>
                <li className="float-left ml-20">
                  <Link className="leading-[50px]" to="/login">
                    로그인
                  </Link>
                </li>
                <li className="float-left ml-20">
                  <Link className="leading-[50px]" to="/join">
                    회원가입
                  </Link>
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
    </div>
  );
};

export default Header;
