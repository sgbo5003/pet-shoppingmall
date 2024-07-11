import React from "react";

const ProductCheckOut = () => {
  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-[2.5rem]">
        <div>
          <form className="xl:gap-x-16 lg:gap-x-12 lg:grid-cols-2 lg:grid">
            <div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  주문자 정보
                </h2>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="orderer"
                    className="block text-sm font-medium text-gray-700"
                  >
                    주문하시는 분
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="email"
                      name="orderer"
                      id="orderer"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    주소
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="email"
                      name="address"
                      id="address"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="phoneNumber1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    전화번호
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="email"
                      name="phoneNumber1"
                      id="phoneNumber1"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="phoneNumber2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    휴대폰 번호
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="email"
                      name="phoneNumber2"
                      id="phoneNumber2"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    이메일
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-[2.5rem] border-gray-200 border-t mt-[2.5rem]">
                <h2 className="text-lg font-medium text-gray-900">배송 정보</h2>
                <div className="mt-[1rem]">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      배송지 확인
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="receiver"
                      className="block text-sm font-medium text-gray-700"
                    >
                      받으실분
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="receiver"
                        id="receiver"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="address2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      받으실 곳
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="address2"
                        id="address2"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="phoneNumber3"
                      className="block text-sm font-medium text-gray-700"
                    >
                      전화번호
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="phoneNumber3"
                        id="phoneNumber3"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="phoneNumber4"
                      className="block text-sm font-medium text-gray-700"
                    >
                      휴대폰 번호
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="phoneNumber4"
                        id="phoneNumber4"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="requestMessage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      요청사항
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="requestMessage"
                        id="requestMessage"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckOut;
