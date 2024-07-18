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
                    <fieldset className="mt-[1rem]">
                      <legend className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0">
                        배송지 방식 선택
                      </legend>
                      <div className="space-y-4 sm:items-center sm:flex sm:space-y-0 sm:space-x-10">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingNew"
                            id="shippingNew"
                            className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                            checked
                          />
                          <label
                            htmlFor="shippingNew"
                            className="text-gray-700 font-medium text-sm block ml-[0.75rem]"
                          >
                            직접 입력
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingSameCheck"
                            id="shippingSameCheck"
                            className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="shippingSameCheck"
                            className="text-gray-700 font-medium text-sm block ml-[0.75rem]"
                          >
                            주문자정보와 동일
                          </label>
                        </div>
                      </div>
                    </fieldset>
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
            <div className="lg:mt-0 mt-[2.5rem]">
              <h2 className="text-lg font-medium text-gray-900">결제 정보</h2>
              <div className="border-gray-200 border rounded-lg mt-[1rem] shadow-sm">
                <ul>
                  <li className="sm:px-[1.5rem] py-[1.5rem] px-[1rem] flex">
                    <div className="shrink-0">
                      <img
                        src=""
                        alt=""
                        className="block w-20 h-auto max-w-full align-middle rounded-md"
                      />
                    </div>
                    <div className="flex-col flex-1 flex ml-[1.5rem]">
                      <div className="flex">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm">
                            <a href="#!" className="font-medium text-gray-700">
                              상품명
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="pt-[0.5rem] justify-between items-end flex-1 flex">
                        <p className="text-gray-900	font-medium text-sm mt-[0.25rem]">
                          10,000
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <dl className="sm:px-[1.5rem] py-[1.5rem] px-[1rem] border-gray-200 border-t space-y-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">합계</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      10,000
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">배송비</dt>
                    <dd className="text-sm font-medium text-gray-900">2,000</dd>
                  </div>
                  <div className="flex items-center justify-between pt-[1.5rem] border-gray-200 border-t">
                    <dt className="text-base font-medium">총 합계</dt>
                    <dd className="text-base font-medium text-gray-900">
                      12,000
                    </dd>
                  </div>
                </dl>
                <div className="sm:px-[1.5rem] py-[1.5rem] px-[1rem] border-gray-200 border-t">
                  <button
                    type="button"
                    className="text-base font-medium text-white py-[0.75rem] px-[1rem] bg-indigo-600 border border-transparent rounded-md w-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    결제하기
                  </button>
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
