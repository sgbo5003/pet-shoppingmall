import React from "react";

const ContentComponent = () => {
  return (
    <div id="content" className="relative w-full">
      <div className="max-w-[1240px] mx-auto my-0">
        <div className="py-40">
          <div className="flex justify-center text-center">
            <strong className="text-3xl">BEST ITEM</strong>
          </div>
        </div>
        <div className="py-40">
          <ul className="flex flex-wrap">
            {[1, 2, 3, 4].map((item, idx) => (
              <li className="basis-1/4" key={idx}>
                <div className="pb-20 text-left product-box">
                  <div className="pb-20 product-thumbnail">
                    <a href="#!">
                      <img src="/image/bestItemImg1.jpg" alt="베스트아이템1" />
                    </a>
                  </div>
                  <div className="product-info">
                    <div className="product-title">
                      <a className="pt-10 font-bold break-keep" href="#!">
                        <span className="text-[#555555] text-[15px]">
                          강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄
                          자동
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
