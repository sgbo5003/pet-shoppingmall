import React, { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { api } from "../api/index.ts";
import {
  ProductDetailResponse,
  initProductDetailResponse,
} from "../api/dto/product/index.ts";
import { AxiosError } from "axios";
import { ErrorDto } from "../api/dto";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [productDetailInfo, setProductDetailInfo] =
    useState<ProductDetailResponse>(initProductDetailResponse);

  const getProductDetail = async () => {
    try {
      const response = await api.get<ProductDetailResponse>(
        `/product/${params.id}`
      );
      console.log("getProductDetail response", response);
      setProductDetailInfo(response.data);
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-0">
        <div className="lg:px-[2rem] sm:py-[6rem] sm:px-[1.5rem] py-[4rem] px-[1rem]">
          <div className="grid lg:gap-x-8 lg:items-start lg:grid-cols-2">
            <TabGroup className="flex flex-col-reverse">
              <div className="lg:max-w-none sm:block max-w-[42rem] w-full mt-[1.5rem] mx-auto hidden">
                <TabList className="grid grid-cols-4 gap-6">
                  {productDetailInfo.imgFiles.map((item, idx) => {
                    return (
                      <Tab
                        className="bg-[rgb(255 255 255)] rounded-md justify-center items-center cursor-pointer h-24 flex relative focus:ring-indigo-400 focus:ring-opacity-50 focus:ring focus:ring-offset-4 focus:outline-offset-2"
                        key={idx}
                      >
                        {({ selected }) => (
                          <>
                            <span className="absolute inset-0 overflow-hidden border border-solid border-[#e5e5e5] rounded-md">
                              <img
                                src={
                                  process.env.REACT_APP_SERVER_IMG_URL + item
                                }
                                alt={item}
                              />
                            </span>
                            <span
                              className={`absolute inset-0 rounded-md pointer-events-none ring-2 ${
                                selected
                                  ? "ring-indigo-500"
                                  : "ring-transparent"
                              }  ring-offset-2`}
                            ></span>
                          </>
                        )}
                      </Tab>
                    );
                  })}
                </TabList>
              </div>
              <div className="w-full aspect-w-1 aspect-h-1 border border-solid border-[#e5e5e5] rounded-lg overflow-hidden">
                <TabPanels>
                  {productDetailInfo.imgFiles.map((item, idx) => {
                    return (
                      <TabPanel key={idx}>
                        <img
                          src={process.env.REACT_APP_SERVER_IMG_URL + item}
                          alt={item}
                          className="object-cover object-center w-full h-full sm:rounded-lg"
                        />
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </div>
            </TabGroup>
            <div className="lg:mt-0 sm:px-0 sm:mt-[4rem] px-[1rem] mt-[2.5rem]">
              <h1 className="text-3xl font-semibold">
                {productDetailInfo.name}
              </h1>
              <div className="mt-10">
                <dl className="float-left w-full py-6 min-h-6">
                  <dt className="float-left w-[100px] text-sm text-[#999] mr-10">
                    정가
                  </dt>
                  <dd className="float-left w-auto text-sm">
                    <del className="text-[#333333]">10,000원</del>
                  </dd>
                </dl>
                <dl className="float-left w-full py-6 min-h-6">
                  <dt className="float-left w-[100px] text-sm text-[#999] mr-10">
                    판매가
                  </dt>
                  <dd className="float-left w-auto text-sm">
                    <strong className="text-xl text-[#000]">
                      <b>8,000</b>
                    </strong>
                    원
                  </dd>
                </dl>
                <dl className="float-left w-full py-6 min-h-6">
                  <dt className="float-left w-[100px] text-sm text-[#999] mr-10">
                    배송비
                  </dt>
                  <dd className="float-left w-auto text-sm">0원</dd>
                </dl>
                <dl className="float-left w-full py-6 min-h-6">
                  <dt className="float-left w-[100px] text-sm text-[#999] mr-10">
                    제조사
                  </dt>
                  <dd className="float-left w-auto text-sm">어니스트키친</dd>
                </dl>
                <dl className="float-left w-full py-6 min-h-6">
                  <dt className="float-left w-[100px] text-sm text-[#999] mr-10">
                    원산지
                  </dt>
                  <dd className="float-left w-auto text-sm">한국</dd>
                </dl>
                <div className="flex items-center float-left w-full py-6 min-h-6">
                  <div className="float-left text-sm text-[#999] mr-10">
                    <span className="min-w-16">
                      <input
                        type="text"
                        className="float-left px-5 w-11 outline-none h-8 border border-[#ccc] text-[#3f3f3f] text-[12px] leading-8 text-center focus:border-none focus:ring-inset focus:ring-[#ccc]"
                        value={1}
                      />
                      <span className="float-left ml-[-1px]">
                        <button
                          type="button"
                          className="block w-[23px] h-[17px] indent-[-9999px] bg-countUp bg-no-repeat bg-left-top"
                        >
                          증가
                        </button>
                        <button
                          type="button"
                          className="block w-[23px] h-[17px] indent-[-9999px] bg-countDown mt-[-2px] bg-no-repeat bg-left-top"
                        >
                          감소
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex grow-[2]">
                    <button
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 border border-transparent rounded-md bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-7"
                    >
                      장바구니
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      바로 구매
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
