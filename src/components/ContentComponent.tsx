import React, { useEffect, useState } from "react";
import { api } from "../api/index.ts";
import { newProductListResponse } from "../api/dto/product";
import { AxiosError } from "axios";
import { ErrorDto } from "../api/dto";
import { Link } from "react-router-dom";

const bestItems = [
  {
    id: 1,
    href: "#!",
    imageSrc: "/image/bestItemImg1.jpg",
    imageAlt: "베스트아이템1",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
  {
    id: 2,
    href: "#!",
    imageSrc: "/image/bestItemImg1.jpg",
    imageAlt: "베스트아이템2",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
  {
    id: 3,
    href: "#!",
    imageSrc: "/image/bestItemImg1.jpg",
    imageAlt: "베스트아이템3",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
  {
    id: 4,
    href: "#!",
    imageSrc: "/image/bestItemImg1.jpg",
    imageAlt: "베스트아이템4",
    name: "강아지 자동줄 3m 코드타입 1p 강아지 리드줄 자동줄 개줄 자동",
    price: 1000,
  },
];

const ContentComponent = () => {
  const [newProductList, setNewProductList] = useState<
    Array<newProductListResponse>
  >([]);
  const getNewProductList = async () => {
    try {
      const response = await api.get<newProductListResponse[]>("/product/new");
      console.log("getNewProductList response", response);
      setNewProductList(response.data);
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  useEffect(() => {
    getNewProductList();
  }, []);

  return (
    <div id="content" className="relative w-full">
      <div className="max-w-[1240px] mx-auto my-0">
        <div className="py-40">
          <div className="flex justify-center text-center">
            <strong className="text-3xl">BEST ITEM</strong>
          </div>
        </div>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">best item</h2>
          <div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {bestItems.map((item) => (
                <li key={item.id} className="group">
                  <a href={item.href} className="group">
                    <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="object-cover object-center w-full h-full group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-[1rem] text-sm text-gray-700 break-keep">
                      {item.name}
                    </h3>
                  </a>
                  <p className="mt-[0.25rem] text-lg font-medium text-gray-900">
                    {item.price}원
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-40">
          <div className="flex justify-center text-center">
            <strong className="text-3xl">NEW ARRIVALS</strong>
          </div>
        </div>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">NEW ARRIVALS</h2>
          <div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {newProductList.map((item) => (
                <li key={item.id} className="group">
                  <Link to={`/product/${item.id}`} className="group">
                    <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={process.env.REACT_APP_SERVER_IMG_URL + item.img1}
                        alt={item.name}
                        className="object-cover object-center w-full h-full group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-[1rem] text-sm text-gray-700 break-keep">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="mt-[0.25rem] text-lg font-medium text-gray-900">
                    {item.price}원 <del>{item.regular_price}원</del>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
