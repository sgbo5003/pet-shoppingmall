import React, { useState } from "react";
import Pagination from "../../pagination/index.tsx";

const Qna = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div>
      <div className="float-right mb-10">
        <button
          type="button"
          className="text-white font-semibold text-sm text-center py-[0.5rem] px-[0.75rem] bg-indigo-600 rounded-md block"
        >
          문의하기
        </button>
      </div>
      <div className="relative clear-both overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
          <colgroup>
            <col width="5%" />
            <col />
            <col width="15%" />
            <col width="13%" />
            <col width="15%" />
          </colgroup>
          <thead className="hidden text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-[1.5rem] py-[0.875rem]">
                ID
              </th>
              <th scope="col" className="px-[1.5rem] py-[0.875rem]">
                Title
              </th>
              <th scope="col" className="px-[1.5rem] py-[0.875rem]">
                Name
              </th>
              <th scope="col" className="px-[1.5rem] py-[0.875rem]">
                Date
              </th>
              <th scope="col" className="px-[1.5rem] py-[0.875rem]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-[1.5rem] py-[1rem] font-medium text-gray-900 whitespace-nowrap"
              >
                3
              </th>
              <td className="px-[1.5rem] py-[1rem]">문의3</td>
              <td className="px-[1.5rem] py-[1rem]">박상준</td>
              <td className="px-[1.5rem] py-[1rem]">2024.06.22</td>
              <td className="px-[1.5rem] py-[1rem]">답변완료</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-[1.5rem] py-[1rem] font-medium text-gray-900 whitespace-nowrap"
              >
                2
              </th>
              <td className="px-[1.5rem] py-[1rem]">문의2</td>
              <td className="px-[1.5rem] py-[1rem]">유인선</td>
              <td className="px-[1.5rem] py-[1rem]">2024.06.21</td>
              <td className="px-[1.5rem] py-[1rem]">답변완료</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-[1.5rem] py-[1rem] font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td className="px-[1.5rem] py-[1rem]">문의1</td>
              <td className="px-[1.5rem] py-[1rem]">홍길동</td>
              <td className="px-[1.5rem] py-[1rem]">2024.06.20</td>
              <td className="px-[1.5rem] py-[1rem]">답변완료</td>
            </tr>
          </tbody>
        </table>
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

export default Qna;
