import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const tabItems = [
  {
    id: 1,
    href: "#!",
    imageSrc: "/image/sliderImg1.jpg",
    imageAlt: "베스트아이템1",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
  {
    id: 2,
    href: "#!",
    imageSrc: "/image/sliderImg2.jpg",
    imageAlt: "베스트아이템2",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
  {
    id: 3,
    href: "#!",
    imageSrc: "/image/sliderImg3.jpg",
    imageAlt: "베스트아이템3",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
];

const ProductDetail = () => {
  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-0">
        <div className="lg:px-[2rem] sm:py-[6rem] sm:px-[1.5rem] py-[4rem] px-[1rem]">
          <div className="grid lg:gap-x-8 lg:items-start lg:grid-cols-2">
            <TabGroup className="flex flex-col-reverse">
              <div className="lg:max-w-none sm:block max-w-[42rem] w-full mt-[1.5rem] mx-auto hidden">
                <TabList className="grid grid-cols-4 gap-6">
                  {tabItems.map((item) => {
                    return (
                      <Tab
                        className="bg-[rgb(255 255 255)] rounded-md justify-center items-center cursor-pointer h-24 flex relative focus:ring-indigo-400 focus:ring-opacity-50 focus:ring focus:ring-offset-4 focus:outline-offset-2"
                        key={item.id}
                      >
                        {({ selected }) => (
                          <>
                            <span className="absolute inset-0 overflow-hidden border border-solid border-[#e5e5e5] rounded-md">
                              <img src={item.imageSrc} alt={item.imageAlt} />
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
              <div className="w-full aspect-w-1 aspect-h-1 border border-solid border-[#e5e5e5] rounded-lg">
                <TabPanels>
                  {tabItems.map((item) => {
                    return (
                      <TabPanel key={item.id}>
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="object-cover object-center w-full h-full sm:rounded-lg"
                        />
                      </TabPanel>
                    );
                  })}
                </TabPanels>
              </div>
            </TabGroup>
            <div className="lg:mt-0 sm:px-0 sm:mt-[4rem] px-[1rem] mt-[2.5rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
