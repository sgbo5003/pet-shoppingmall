import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { AxiosError } from "axios";
import { useFormik } from "formik";
import {
  UserWalletPointUpdate,
  ErrorDto,
  initUserWalletResponse,
  UserWalletResponse,
} from "../api/dto/index.ts";
import * as Yup from "yup";
import { api } from "../api/index.ts";
import useUserStore from "../stores/useUserStore.ts";

const customTheme: CustomFlowbiteTheme["modal"] = {
  header: {
    base: "flex items-start justify-between rounded-t border-b p-[1rem] md:p-[1.25rem] dark:border-gray-600",
    title: "text-xl font-semibold text-gray-900 dark:text-white",
  },
  body: {
    base: "p-[1rem] md:p-[1.25rem] space-y-4",
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-[1.5rem] dark:border-gray-600 border-t",
  },
};
export interface initFormValues {
  point: string;
}

const initialValues: initFormValues = {
  point: "",
};

const validationSchema = Yup.object().shape({
  point: Yup.string().required("필수 입력 항목입니다."),
});

const MyPage = () => {
  const { userInfo } = useUserStore();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [userWalletResponse, setUserWalletResponse] =
    useState<UserWalletResponse>(initUserWalletResponse);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log("values123", values);
      try {
        setSubmitting(true);
        await api.patch<UserWalletPointUpdate>(
          `/userWallet/point/${userInfo.id}`,
          { point: Number(values.point) }
        );
        await setOpenModal(false);
        await getUserWallet();
      } catch (e) {
        const error = e as AxiosError<ErrorDto>;
        setStatus(error.response?.data.errorMessage);
        setSubmitting(false);
        alert(error.response?.data);
      }
    },
  });

  const getUserWallet = async () => {
    try {
      const response = await api.get<UserWalletResponse>(
        `/userWallet/${userInfo.id}`
      );
      console.log("getUserWallet response", response);
      setUserWalletResponse(response.data ?? initUserWalletResponse);
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  useEffect(() => {
    getUserWallet();
  }, []);

  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-0">
        <div className="min-h-[500px]">
          <div className="pb-20">
            <div className="float-right py-10">
              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="px-20 py-10 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 me-[.5rem] focus:outline-none "
              >
                포인트 충전
              </button>
            </div>
            <div className="my-20 border-0 outline outline-[rgb(234,234,234)] outline-1 bg-[#fdfdfd] table w-full">
              <div className="bg-[#fdfdfd] table-cell w-[30%] py-20 text-center align-middle">
                <span className="block max-w-[70px] mx-auto pb-10">
                  <img
                    src="/image/ico_member04.gif"
                    alt="회원등급 이미지"
                    className="max-w-[70px]"
                  />
                </span>
                <div className="leading-5">
                  <p>{userInfo.name}님의</p>
                  <p>
                    회원등급은{" "}
                    <span className="text-[#333]">일반회원등급 </span>
                    입니다.
                  </p>
                </div>
              </div>
              <div className="table-cell w-[69%] align-middle bg-[#ffffff]">
                <ul className="w-auto py-27 px-10 leading-[1]">
                  <li className="inline-block w-[33%] text-sm text-center">
                    <span className="block px-10">
                      <img
                        src="/image/icon_mileage.png"
                        alt="포인트"
                        className="inline-block"
                      />
                    </span>
                    <span className="block px-10">
                      <em className="block not-italic font-bold py-15">
                        포인트
                      </em>
                      <a href="#!">
                        <strong className="text-[20px] text-[#000] pr-3">
                          {userWalletResponse.point}
                        </strong>
                      </a>
                      원
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        // popup
        theme={customTheme}
      >
        <Modal.Header>포인트 충전</Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="origin"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  포인트
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...formik.getFieldProps("point")}
                    className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                      formik.touched.point && formik.errors.point
                        ? "text-red-900"
                        : "text-gray-900"
                    } shadow-sm ring-1 ring-inset ${
                      formik.touched.point && formik.errors.point
                        ? "ring-red-300"
                        : "ring-gray-300"
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                      formik.touched.point && formik.errors.point
                        ? "focus:ring-red-500"
                        : "focus:ring-indigo-600"
                    } sm:text-sm sm:leading-6`}
                  />
                </div>
                {formik.touched.point && formik.errors.point ? (
                  <p id="errorMessage" className="text-red-600 mt-[0.5rem]">
                    {formik.errors.point}
                  </p>
                ) : null}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-end">
            <button
              type="submit"
              className="px-12 py-8 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              충전
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default MyPage;
