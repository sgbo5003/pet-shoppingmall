import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const Pagination = ({
  totalPage,
  currentPage,
  totalCount,
  setPage,
  size,
}: {
  totalPage: number;
  currentPage: number;
  totalCount: number;
  setPage: Dispatch<SetStateAction<number>>;
  size: number;
}) => {
  const pageNumArr =
    totalPage === 0
      ? []
      : totalPage === 1
      ? [1]
      : totalPage === 2
      ? [1, 2]
      : totalPage === 3
      ? [1, 2, 3]
      : totalPage === 4
      ? [1, 2, 3, 4]
      : [1, 2, 3, 4, 5];
  // 마지막 페이지 계산 (총페이지 / 보여줄 행의 개수) + 1
  const totalCntVal =
    totalCount % size === 0
      ? Math.floor(totalCount / size)
      : Math.floor(totalCount / size) + 1;
  const [newArr, setNewArr] = useState<Array<number>>(pageNumArr);

  const onPageNumClick = (
    page: number,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPage(page);
  };

  // pagination -> 이전 아이콘(<) 클릭 시
  const onPrevIconClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // router.push(`${baseUrl}?page=${currentPage - 1}&size=${size}${params ?? ''}`);
    e.preventDefault();
    if (currentPage === 1) {
      return;
    }
    setPage(currentPage - 1);
  };

  // pagination -> 이전 아이콘(<<) 클릭 시
  // const onPrevAllIconClick = () => {
  //   setPage(1);
  // };

  // pagination -> 다음 아이콘(>) 클릭 시
  const onNextIconClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (currentPage === totalCntVal) {
      return;
    }
    setPage(currentPage + 1);
  };

  // pagination -> 다음 아이콘(>>) 클릭 시
  // const onNextAllIconClick = () => {
  //   setPage(totalCntVal);
  // };

  console.log("totalCntVal", totalCntVal);

  useEffect(() => {
    // console.log('currentPage', currentPage);
    // console.log('totalPage', totalPage);
    if (totalPage > 5) {
      if (currentPage < 4) {
        setNewArr([1, 2, 3, 4, 5]);
      } else if (currentPage > totalCntVal - 3) {
        setNewArr([
          totalCntVal - 4,
          totalCntVal - 3,
          totalCntVal - 2,
          totalCntVal - 1,
          totalCntVal,
        ]);
      } else {
        const newArray: number[] = [];
        for (let i = currentPage - 1; i <= currentPage + 3; i++) {
          newArray.push(i);
        }
        setNewArr(newArray);
      }
    } else {
      setNewArr(pageNumArr);
    }
  }, [currentPage, size, totalPage]);

  return (
    <ul className="flex items-center justify-center h-[2rem] -space-x-px text-sm">
      <li>
        <a
          href="#!"
          className={`flex items-center justify-center h-[2rem] px-[0.75rem] leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg  ${
            currentPage === 1
              ? "opacity-50 cursor-default"
              : "hover:bg-gray-100 hover:text-gray-700"
          }`}
          onClick={(e) => onPrevIconClick(e)}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </a>
      </li>
      {newArr.map((item: number, idx: number) => (
        <li key={idx}>
          <a
            href="#!"
            className={
              item === currentPage
                ? "z-10 flex items-center justify-center h-[2rem] px-[0.75rem] leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                : "flex items-center justify-center h-[2rem] px-[0.75rem] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }
            onClick={(e) => onPageNumClick(item, e)}
          >
            {item}
          </a>
        </li>
      ))}
      <li>
        <a
          href="#!"
          className={`flex items-center justify-center h-[2rem] px-[0.75rem] leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ${
            currentPage === totalCntVal
              ? "opacity-50 cursor-default"
              : "hover:bg-gray-100 hover:text-gray-700"
          }`}
          onClick={(e) => onNextIconClick(e)}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-2.5 h-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};
export default Pagination;
