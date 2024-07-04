import React, { useState } from "react";
import Pagination from "../../pagination/index.tsx";

const Review = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">최근 리뷰</h2>
      <div className="pb-[2.5rem] mt-[1.5rem] border-gray-200 border-t border-b">
        <div className="lg:gap-x-8 lg:grid-cols-12 lg:grid pt-[2.5rem]">
          <div className="xl:gap-x-8 xl:items-start xl:grid-cols-3 xl:grid xl:col-start-4 xl:col-span-9 lg:col-start-5 lg:col-span-8">
            <div className="flex items-center xl:col-span-1">
              <div className="flex items-center">
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
              </div>
            </div>
            <div className="xl:mt-0 xl:col-span-2 lg:mt-[1.5rem] mt-[1rem]">
              <h3 className="text-sm font-medium text-gray-900">
                Can't say enough good things
              </h3>
              <div className="text-gray-500 text-sm mt-[0.75rem]">
                <p>
                  I was really pleased with the overall shopping experience. My
                  order even included a little personal, handwritten note, which
                  delighted me!
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:items-start lg:flex-col lg:mt-0 lg:row-start-1 lg:col-start-1 lg:col-span-4 text-sm items-center flex mt-[1.5rem]">
            <p className="font-medium text-gray-900">Risako M</p>
            <time
              dateTime="2021-01-06"
              className="lg:pl-0 lg:border-0 lg:mt-[0.5rem] lg:ml-0 text-gray-500 pl-[1rem] border-gray-200 border-l ml-[1rem]"
            >
              May 16, 2021
            </time>
          </div>
        </div>
        <div className="lg:gap-x-8 lg:grid-cols-12 lg:grid pt-[2.5rem] border-gray-200 border-t mt-[2.5rem]">
          <div className="xl:gap-x-8 xl:items-start xl:grid-cols-3 xl:grid xl:col-start-4 xl:col-span-9 lg:col-start-5 lg:col-span-8">
            <div className="flex items-center xl:col-span-1">
              <div className="flex items-center">
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <svg
                  className="w-[1.25rem] h-[1.25rem] flex-shrink-0 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
              </div>
            </div>
            <div className="xl:mt-0 xl:col-span-2 lg:mt-[1.5rem] mt-[1rem]">
              <h3 className="text-sm font-medium text-gray-900">
                Can't say enough good things
              </h3>
              <div className="text-gray-500 text-sm mt-[0.75rem]">
                <p>
                  I was really pleased with the overall shopping experience. My
                  order even included a little personal, handwritten note, which
                  delighted me!
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 lg:items-start lg:flex-col lg:mt-0 lg:row-start-1 lg:col-start-1 lg:col-span-4 text-sm items-center flex mt-[1.5rem]">
            <p className="font-medium text-gray-900">Risako M</p>
            <time
              dateTime="2021-01-06"
              className="lg:pl-0 lg:border-0 lg:mt-[0.5rem] lg:ml-0 text-gray-500 pl-[1rem] border-gray-200 border-l ml-[1rem]"
            >
              May 16, 2021
            </time>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Pagination
          totalPage={6}
          currentPage={page}
          totalCount={30}
          setPage={setPage}
          size={5}
        />
      </div>
    </div>
  );
};

export default Review;
