import React from "react";

const Header = () => {
  return (
    <div id="header" className="relative w-full">
      <div className="headerTop">
        <div className="after:clear-both after:block max-w-[1240px] mx-auto my-0">
          <div className="float-left">
            <div className="py-25">
              <a href="#!">
                <img
                  className="w-12 h-12"
                  src="image/shiba.png"
                  alt="홈 이미지"
                />
              </a>
            </div>
          </div>
          <div className="float-right">
            <ul className="py-25">
              <li className="float-left ml-20">로그인</li>
              <li className="float-left ml-20">회원가입</li>
              <li className="float-left ml-20">마이페이지</li>
              <li className="float-left ml-20">장바구니</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
