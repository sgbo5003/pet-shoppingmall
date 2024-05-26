import { Box, Container, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubTitleComponent, { defaultTheme } from "./subtitle/index.tsx";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { AxiosError } from "axios";
import { CategoryAllResponse, ErrorDto } from "../api/dto/index.ts";
import { api } from "../api/index.ts";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../components/modal/index.tsx";
import ProductImageModal from "./modal/productAddImage/index.tsx";
export interface FileProps {
  file: any; // type : FileProps | CreativeFiles
  imageSize: { width: number; height: number };
  imageSrc: string;
}
export interface productFormValues {
  name: string;
  imgFiles: FileProps[];
  company: string;
  origin: string;
  category1: number;
  category2: number;
  price: string;
}

const Admin = () => {
  const [category1List, setCategory1List] = useState<
    Array<CategoryAllResponse>
  >([]);
  const [category2List, setCategory2List] = useState<
    Array<CategoryAllResponse>
  >([]);
  const [addImgModalOn, setAddImgModalOn] = useState<boolean>(false);

  const initialValues: productFormValues = {
    name: "",
    imgFiles: [],
    company: "",
    origin: "",
    category1: 1,
    category2: 1,
    price: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다")
      .min(3, "최소 3글자 이상이여야 합니다.")
      .max(50, "최대 50글자 이하이여야 합니다.")
      .required("이메일은 필수 입력 항목입니다."),
    password: Yup.string()
      .min(8, "최소 8글자 이상이여야 합니다.")
      .max(20, "최대 20글자 이하이여야 합니다.")
      .required("비밀번호는 필수 입력 항목입니다."),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log("values123", values);
      try {
        setSubmitting(true);
        // const obj: LoginRequest = {
        //   email: values.email,
        //   password: values.password,
        // };
        // const response = await api.post<LoginResponse>("/auth/login", obj);
        // console.log("response", response);
        // await setUserInfo(response.data);
        // await navigate("/");
      } catch (e) {
        const error = e as AxiosError<ErrorDto>;
        setStatus(error.response?.data.errorMessage);
        setSubmitting(false);
        alert(error.response?.data);
      }
    },
  });

  const getCategory1 = async () => {
    try {
      const response = await api.get<CategoryAllResponse[]>("/category1");
      // console.log("getCategory1 response", response);
      setCategory1List(response.data);
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  const getCategory2 = async (id: number, init: boolean) => {
    try {
      const response = await api.get<CategoryAllResponse[]>(`/category2/${id}`);
      // console.log("getCategory2 response", response);
      await setCategory2List(response.data);
      if (!init) {
        await formik.setValues({
          ...formik.values,
          category1: id,
          category2: response.data[0].id,
        });
      }
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  useEffect(() => {
    getCategory1();
    getCategory2(initialValues.category1, true);
  }, []);

  console.log("formikValues", formik.values);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg" className="sm:pb-60">
        <SubTitleComponent title="ADMIN" />
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <form>
            <div className="space-y-12">
              <div className="pb-12 border-b border-gray-900/10">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  상품 등록
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  상품 등록 관련 정보를 입력해주세요.
                </p>

                <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      상품명
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...formik.getFieldProps("name")}
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      상품 이미지
                    </label>
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={() => setAddImgModalOn(true)}
                    >
                      이미지 등록
                    </button>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      제조사
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...formik.getFieldProps("company")}
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="origin"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      원산지
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...formik.getFieldProps("origin")}
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="category1"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      카테고리1
                    </label>
                    <div className="mt-2">
                      <select
                        {...formik.getFieldProps("category1")}
                        onChange={async (e) => {
                          await getCategory2(Number(e.target.value), false);
                        }}
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        {category1List.map((item) => {
                          return (
                            <option value={item.id} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="category2"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      카테고리2
                    </label>
                    <div className="mt-2">
                      <select
                        {...formik.getFieldProps("category2")}
                        onChange={(e) =>
                          formik.setValues({
                            ...formik.values,
                            category2: Number(e.target.value),
                          })
                        }
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        {category2List.map((item) => {
                          return (
                            <option value={item.id} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      가격
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...formik.getFieldProps("price")}
                        className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end mt-20 gap-x-6">
              <button
                type="submit"
                className="px-12 py-8 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                등록
              </button>
            </div>
          </form>
        </Box>
      </Container>
      <Modal
        isOpen={addImgModalOn}
        setIsOpen={setAddImgModalOn}
        headerTitle={"이미지 등록"}
        headerBorderBottom={true}
        height={"700"}
        width={"950"}
        bodyTextAlign={"start"}
        bodyPaddingCustom={true}
      >
        <ProductImageModal
          form={formik.values}
          setValues={formik.setValues}
          setAddImgModalOn={setAddImgModalOn}
        />
      </Modal>
    </ThemeProvider>
  );
};

export default Admin;
