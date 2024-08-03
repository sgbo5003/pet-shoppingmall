import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import { ErrorDto } from "../../api/dto/index.ts";
import useUserStore from "../../stores/useUserStore.ts";
import { api } from "../../api/index.ts";
import {
  initProductDetailResponse,
  ProductDetailResponse,
} from "../../api/dto/product/index.ts";
import { useLocation, useParams } from "react-router-dom";

export interface checkOutFormValues {
  // 주문자 정보
  name: string;
  address: string;
  orderPhone1: string;
  orderPhone2: string;
  email: string;
  // 배송 정보
  shippingName: string;
  shippingAddress: string;
  shippingPhone1: string;
  shippingPhone2: string;
  request: string;
  shippingType: "shippingNew" | "shippingSameCheck";
}

const initialValues: checkOutFormValues = {
  // 주문자 정보
  name: "",
  address: "",
  orderPhone1: "",
  orderPhone2: "",
  email: "",
  // 배송 정보
  shippingName: "",
  shippingAddress: "",
  shippingPhone1: "",
  shippingPhone2: "",
  request: "",
  shippingType: "shippingNew",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("필수 입력 항목입니다."),
  address: Yup.string().required("필수 입력 항목입니다."),
  orderPhone2: Yup.string().required("필수 입력 항목입니다."),
  email: Yup.string().required("필수 입력 항목입니다."),
  shippingName: Yup.string().required("필수 입력 항목입니다."),
  shippingAddress: Yup.string().required("필수 입력 항목입니다."),
  shippingPhone2: Yup.string().required("필수 입력 항목입니다."),
});

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductCheckOut = () => {
  const { userInfo } = useUserStore();
  const params = useParams();
  const query = useQuery();
  const quantity = query.get("quantity");
  const [productDetailInfo, setProductDetailInfo] =
    useState<ProductDetailResponse>(initProductDetailResponse);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log("values123", values);
      try {
        setSubmitting(true);
      } catch (e) {
        const error = e as AxiosError<ErrorDto>;
        setStatus(error.response?.data.errorMessage);
        setSubmitting(false);
        alert(error.response?.data);
      }
    },
  });

  const getProductDetail = async () => {
    try {
      const response = await api.get<ProductDetailResponse>(
        `/product/${params.id}`
      );
      console.log("getProductDetail response", response);
      await setProductDetailInfo(response.data);
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      name: userInfo.name,
      address: userInfo.address,
    });
    getProductDetail();
  }, []);

  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-[2.5rem]">
        <div>
          <form
            className="xl:gap-x-16 lg:gap-x-12 lg:grid-cols-2 lg:grid"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  주문자 정보
                </h2>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    주문하시는 분
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="text"
                      {...formik.getFieldProps("name")}
                      className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                        formik.touched.name && formik.errors.name
                          ? "text-red-900"
                          : "text-gray-900"
                      } shadow-sm ring-1 ring-inset ${
                        formik.touched.name && formik.errors.name
                          ? "ring-red-300"
                          : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        formik.touched.name && formik.errors.name
                          ? "focus:ring-red-500"
                          : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                      disabled
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                      {formik.errors.name}
                    </p>
                  ) : null}
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
                      type="text"
                      {...formik.getFieldProps("address")}
                      className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                        formik.touched.address && formik.errors.address
                          ? "text-red-900"
                          : "text-gray-900"
                      } shadow-sm ring-1 ring-inset ${
                        formik.touched.address && formik.errors.address
                          ? "ring-red-300"
                          : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        formik.touched.address && formik.errors.address
                          ? "focus:ring-red-500"
                          : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                      disabled
                    />
                  </div>
                  {formik.touched.address && formik.errors.address ? (
                    <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                      {formik.errors.address}
                    </p>
                  ) : null}
                </div>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="orderPhone1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    전화번호
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="text"
                      {...formik.getFieldProps("orderPhone1")}
                      className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                        formik.touched.orderPhone1 && formik.errors.orderPhone1
                          ? "text-red-900"
                          : "text-gray-900"
                      } shadow-sm ring-1 ring-inset ${
                        formik.touched.orderPhone1 && formik.errors.orderPhone1
                          ? "ring-red-300"
                          : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        formik.touched.orderPhone1 && formik.errors.orderPhone1
                          ? "focus:ring-red-500"
                          : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {formik.touched.orderPhone1 && formik.errors.orderPhone1 ? (
                    <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                      {formik.errors.orderPhone1}
                    </p>
                  ) : null}
                </div>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="orderPhone2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    휴대폰 번호
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="text"
                      {...formik.getFieldProps("orderPhone2")}
                      className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                        formik.touched.orderPhone2 && formik.errors.orderPhone2
                          ? "text-red-900"
                          : "text-gray-900"
                      } shadow-sm ring-1 ring-inset ${
                        formik.touched.orderPhone2 && formik.errors.orderPhone2
                          ? "ring-red-300"
                          : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        formik.touched.orderPhone2 && formik.errors.orderPhone2
                          ? "focus:ring-red-500"
                          : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {formik.touched.orderPhone2 && formik.errors.orderPhone2 ? (
                    <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                      {formik.errors.orderPhone2}
                    </p>
                  ) : null}
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
                      {...formik.getFieldProps("email")}
                      className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-900"
                          : "text-gray-900"
                      } shadow-sm ring-1 ring-inset ${
                        formik.touched.email && formik.errors.email
                          ? "ring-red-300"
                          : "ring-gray-300"
                      } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                        formik.touched.email && formik.errors.email
                          ? "focus:ring-red-500"
                          : "focus:ring-indigo-600"
                      } sm:text-sm sm:leading-6`}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                      {formik.errors.email}
                    </p>
                  ) : null}
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
                            value="shippingNew"
                            className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                            checked={
                              formik.values.shippingType === "shippingNew"
                                ? true
                                : false
                            }
                            onChange={() => {
                              formik.setValues({
                                ...formik.values,
                                shippingType: "shippingNew",
                                shippingName: "",
                                shippingAddress: "",
                              });
                            }}
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
                            value="shippingSameCheck"
                            className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                            checked={
                              formik.values.shippingType === "shippingSameCheck"
                                ? true
                                : false
                            }
                            onChange={() => {
                              formik.setValues({
                                ...formik.values,
                                shippingType: "shippingSameCheck",
                                shippingName: formik.values.name,
                                shippingAddress: formik.values.address,
                              });
                            }}
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
                      htmlFor="shippingName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      받으실분
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        {...formik.getFieldProps("shippingName")}
                        className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                          formik.touched.shippingName &&
                          formik.errors.shippingName
                            ? "text-red-900"
                            : "text-gray-900"
                        } shadow-sm ring-1 ring-inset ${
                          formik.touched.shippingName &&
                          formik.errors.shippingName
                            ? "ring-red-300"
                            : "ring-gray-300"
                        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                          formik.touched.shippingName &&
                          formik.errors.shippingName
                            ? "focus:ring-red-500"
                            : "focus:ring-indigo-600"
                        } sm:text-sm sm:leading-6`}
                      />
                    </div>
                    {formik.touched.shippingName &&
                    formik.errors.shippingName ? (
                      <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                        {formik.errors.shippingName}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="shippingAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      받으실 곳
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        {...formik.getFieldProps("shippingAddress")}
                        className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                          formik.touched.shippingAddress &&
                          formik.errors.shippingAddress
                            ? "text-red-900"
                            : "text-gray-900"
                        } shadow-sm ring-1 ring-inset ${
                          formik.touched.shippingAddress &&
                          formik.errors.shippingAddress
                            ? "ring-red-300"
                            : "ring-gray-300"
                        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                          formik.touched.shippingAddress &&
                          formik.errors.shippingAddress
                            ? "focus:ring-red-500"
                            : "focus:ring-indigo-600"
                        } sm:text-sm sm:leading-6`}
                      />
                    </div>
                    {formik.touched.shippingAddress &&
                    formik.errors.shippingAddress ? (
                      <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                        {formik.errors.shippingAddress}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="shippingPhone1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      전화번호
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        {...formik.getFieldProps("shippingPhone1")}
                        className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                          formik.touched.shippingPhone1 &&
                          formik.errors.shippingPhone1
                            ? "text-red-900"
                            : "text-gray-900"
                        } shadow-sm ring-1 ring-inset ${
                          formik.touched.shippingPhone1 &&
                          formik.errors.shippingPhone1
                            ? "ring-red-300"
                            : "ring-gray-300"
                        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                          formik.touched.shippingPhone1 &&
                          formik.errors.shippingPhone1
                            ? "focus:ring-red-500"
                            : "focus:ring-indigo-600"
                        } sm:text-sm sm:leading-6`}
                      />
                    </div>
                    {formik.touched.shippingPhone1 &&
                    formik.errors.shippingPhone1 ? (
                      <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                        {formik.errors.shippingPhone1}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="shippingPhone2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      휴대폰 번호
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        {...formik.getFieldProps("shippingPhone2")}
                        className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                          formik.touched.shippingPhone2 &&
                          formik.errors.shippingPhone2
                            ? "text-red-900"
                            : "text-gray-900"
                        } shadow-sm ring-1 ring-inset ${
                          formik.touched.shippingPhone2 &&
                          formik.errors.shippingPhone2
                            ? "ring-red-300"
                            : "ring-gray-300"
                        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                          formik.touched.shippingPhone2 &&
                          formik.errors.shippingPhone2
                            ? "focus:ring-red-500"
                            : "focus:ring-indigo-600"
                        } sm:text-sm sm:leading-6`}
                      />
                    </div>
                    {formik.touched.shippingPhone2 &&
                    formik.errors.shippingPhone2 ? (
                      <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                        {formik.errors.shippingPhone2}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-[1rem]">
                    <label
                      htmlFor="request"
                      className="block text-sm font-medium text-gray-700"
                    >
                      요청사항
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        {...formik.getFieldProps("request")}
                        className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                          formik.touched.request && formik.errors.request
                            ? "text-red-900"
                            : "text-gray-900"
                        } shadow-sm ring-1 ring-inset ${
                          formik.touched.request && formik.errors.request
                            ? "ring-red-300"
                            : "ring-gray-300"
                        } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                          formik.touched.request && formik.errors.request
                            ? "focus:ring-red-500"
                            : "focus:ring-indigo-600"
                        } sm:text-sm sm:leading-6`}
                      />
                    </div>
                    {formik.touched.request && formik.errors.request ? (
                      <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                        {formik.errors.request}
                      </p>
                    ) : null}
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
                        src={
                          process.env.REACT_APP_SERVER_IMG_URL +
                          productDetailInfo.img1
                        }
                        alt={productDetailInfo.name}
                        className="block w-20 h-full max-w-full align-middle rounded-md"
                      />
                    </div>
                    <div className="flex-col flex-1 flex ml-[1.5rem]">
                      <div className="flex">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm">
                            <a href="#!" className="font-medium text-gray-700">
                              {productDetailInfo.name}
                            </a>
                          </h4>
                          {/* <p className="text-gray-500 text-sm mt-[0.25rem]">
                            수량 2개
                          </p> */}
                        </div>
                      </div>
                      <div className="pt-[0.5rem] justify-between items-end flex-1 flex">
                        <p className="text-gray-900	font-medium text-sm mt-[0.25rem]">
                          {(
                            Number(productDetailInfo.price) * Number(quantity)
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <dl className="sm:px-[1.5rem] py-[1.5rem] px-[1rem] border-gray-200 border-t space-y-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">합계</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {(
                        Number(productDetailInfo.price) * Number(quantity)
                      ).toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">배송비</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {productDetailInfo.delivery_fee.toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-[1.5rem] border-gray-200 border-t">
                    <dt className="text-base font-medium">총 합계</dt>
                    <dd className="text-base font-medium text-gray-900">
                      {(
                        Number(productDetailInfo.price) * Number(quantity) +
                        productDetailInfo.delivery_fee
                      ).toLocaleString()}
                    </dd>
                  </div>
                </dl>
                <div className="sm:px-[1.5rem] py-[1.5rem] px-[1rem] border-gray-200 border-t">
                  <button
                    type="submit"
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
