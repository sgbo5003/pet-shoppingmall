import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import useUserStore from "../stores/useUserStore.ts";
import { AxiosError } from "axios";
import { ErrorDto } from "../api/dto/index.ts";
import { ModifyRequest } from "../api/dto/auth/index.ts";
import { api } from "../api/index.ts";

export interface myInfoFormValues {
  name: string;
  phoneNumber: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
  address: string;
}
const initialValues: myInfoFormValues = {
  name: "",
  phoneNumber: "",
  password: "",
  newPassword: "",
  newPasswordConfirm: "",
  address: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "최소 3글자 이상이여야 합니다.")
    .max(50, "최대 50글자 이하이여야 합니다.")
    .required("필수 입력 항목입니다."),
  phoneNumber: Yup.string()
    .notRequired()
    .max(20, "최대 20글자 이하이여야 합니다.")
    .matches(/^[0-9()+-\s]{6,20}$/, "올바르지 않은 형식입니다."),
  address: Yup.string().required("필수 입력 항목입니다."),
  password: Yup.string()
    .notRequired()
    .when(["newPassword", "newPasswordConfirm"], {
      is: (newPassword, newPasswordConfirm) =>
        !!newPassword && !!newPasswordConfirm,
      then: (schema) => schema.required("현재 비밀번호를 입력해주세요."),
    })
    .test(
      "all-same",
      "현재 비밀번호, 새 비밀번호, 새 비밀번호 확인이 모두 같을 수 없습니다.",
      function (value) {
        const { newPassword, newPasswordConfirm } = this.parent;
        if (value && newPassword && newPasswordConfirm) {
          return !(value === newPassword && value === newPasswordConfirm);
        }
        return true;
      }
    ),
  newPassword: Yup.string()
    .notRequired()
    .min(8, "새 비밀번호는 최소 8자 이상이어야 합니다.")
    .test(
      "different-from-current",
      "새 비밀번호는 현재 비밀번호와 같을 수 없습니다.",
      function (value) {
        const { password } = this.parent;
        return !value || value !== password;
      }
    )
    .test(
      "confirm-check",
      "새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.",
      function (value) {
        const { newPasswordConfirm } = this.parent;
        return !value || value === newPasswordConfirm;
      }
    ),
  newPasswordConfirm: Yup.string()
    .notRequired()
    .oneOf([Yup.ref("newPassword")], "새 비밀번호와 일치하지 않습니다.")
    .test(
      "new-password-check",
      "새 비밀번호를 먼저 입력해주세요.",
      function (value) {
        const { newPassword } = this.parent;
        return !value || !!newPassword;
      }
    ),
});

const MyInfo = () => {
  const { userInfo } = useUserStore();

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      console.log("values123", values);
      try {
        setSubmitting(true);
        const obj: ModifyRequest = {
          email: userInfo.email,
          password: values.password,
          newPassword: values.newPassword,
          name: values.name,
          phoneNumber: values.phoneNumber,
          address: values.address,
        };
        await api.patch<ModifyRequest>("/auth/modify", obj);
        alert("회원정보 수정 완료");
      } catch (e) {
        const error = e as AxiosError<ErrorDto>;
        setStatus(error.response?.data.errorMessage);
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      name: userInfo.name,
      address: userInfo.address,
    });
  }, []);

  console.log("formik.error", formik.errors);

  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-0">
        <div className="min-h-[500px]">
          <div className="pb-20">
            <div className="pt-20 mb-20 border-b border-[#eaeaea]">
              <h2 className="pb-8 inline-block text-[#333] border-b-[3px] border-[#333] text-[22px]">
                회원정보 변경
              </h2>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <h3 className="pb-17 text-lg text-[#222222] inline-block">
                    기본정보
                  </h3>
                  <div className="border-t border-[#999999]">
                    <table className="w-full">
                      <colgroup>
                        <col width="25%" />
                        <col width="75%" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th className="text-left border-b border-[#dcdcdc] bg-[#fbfbfb] py-10 px-25 border-l-0">
                            <span>이메일</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            {userInfo.email}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left border-b border-[#dcdcdc] bg-[#fbfbfb] py-10 px-25 border-l-0">
                            <span>비밀번호</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            <dl className="py-5">
                              <dt className="inline-block w-[120px] align-top">
                                현재 비밀번호
                              </dt>
                              <dd className="inline-block">
                                <div className="inline">
                                  <input
                                    type="text"
                                    {...formik.getFieldProps("password")}
                                    className={`block w-4/5 rounded-md border-0 px-1.5 py-1.5 ${
                                      formik.touched.password &&
                                      formik.errors.password
                                        ? "text-red-900"
                                        : "text-gray-900"
                                    } shadow-sm ring-1 ring-inset ${
                                      formik.touched.password &&
                                      formik.errors.password
                                        ? "ring-red-300"
                                        : "ring-gray-300"
                                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                                      formik.touched.password &&
                                      formik.errors.password
                                        ? "focus:ring-red-500"
                                        : "focus:ring-indigo-600"
                                    } sm:text-sm sm:leading-6`}
                                  />
                                  {formik.touched.password &&
                                  formik.errors.password ? (
                                    <p
                                      id="errorMessage"
                                      className="text-red-600 mt-[0.5rem]"
                                    >
                                      {formik.errors.password}
                                    </p>
                                  ) : null}
                                </div>
                              </dd>
                            </dl>
                            <dl className="py-5">
                              <dt className="inline-block w-[120px] align-top">
                                새 비밀번호
                              </dt>
                              <dd className="inline-block">
                                <div className="inline">
                                  <input
                                    type="text"
                                    {...formik.getFieldProps("newPassword")}
                                    className={`block rounded-md border-0 px-1.5 py-1.5 w-4/5 ${
                                      formik.touched.newPassword &&
                                      formik.errors.newPassword
                                        ? "text-red-900"
                                        : "text-gray-900"
                                    } shadow-sm ring-1 ring-inset ${
                                      formik.touched.newPassword &&
                                      formik.errors.newPassword
                                        ? "ring-red-300"
                                        : "ring-gray-300"
                                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                                      formik.touched.newPassword &&
                                      formik.errors.newPassword
                                        ? "focus:ring-red-500"
                                        : "focus:ring-indigo-600"
                                    } sm:text-sm sm:leading-6`}
                                  />
                                  {formik.touched.newPassword &&
                                  formik.errors.newPassword ? (
                                    <p
                                      id="errorMessage"
                                      className="text-red-600 mt-[0.5rem]"
                                    >
                                      {formik.errors.newPassword}
                                    </p>
                                  ) : null}
                                </div>
                              </dd>
                            </dl>
                            <dl className="py-5">
                              <dt className="inline-block w-[120px] align-top">
                                새 비밀번호 확인
                              </dt>
                              <dd className="inline-block">
                                <div className="inline">
                                  <input
                                    type="text"
                                    {...formik.getFieldProps(
                                      "newPasswordConfirm"
                                    )}
                                    className={`block w-4/5 rounded-md border-0 px-1.5 py-1.5 ${
                                      formik.touched.newPasswordConfirm &&
                                      formik.errors.newPasswordConfirm
                                        ? "text-red-900"
                                        : "text-gray-900"
                                    } shadow-sm ring-1 ring-inset ${
                                      formik.touched.newPasswordConfirm &&
                                      formik.errors.newPasswordConfirm
                                        ? "ring-red-300"
                                        : "ring-gray-300"
                                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                                      formik.touched.newPasswordConfirm &&
                                      formik.errors.newPasswordConfirm
                                        ? "focus:ring-red-500"
                                        : "focus:ring-indigo-600"
                                    } sm:text-sm sm:leading-6`}
                                  />
                                  {formik.touched.newPasswordConfirm &&
                                  formik.errors.newPasswordConfirm ? (
                                    <p
                                      id="errorMessage"
                                      className="text-red-600 mt-[0.5rem]"
                                    >
                                      {formik.errors.newPasswordConfirm}
                                    </p>
                                  ) : null}
                                </div>
                              </dd>
                            </dl>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left border-b border-[#dcdcdc] bg-[#fbfbfb] py-10 px-25 border-l-0">
                            <span>이름</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            <div className="w-4/5">
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
                              />
                              {formik.touched.name && formik.errors.name ? (
                                <p
                                  id="errorMessage"
                                  className="text-red-600 mt-[0.5rem]"
                                >
                                  {formik.errors.name}
                                </p>
                              ) : null}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left border-b border-[#dcdcdc] bg-[#fbfbfb] py-10 px-25 border-l-0">
                            <span>전화번호</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            <div className="w-4/5">
                              <input
                                type="text"
                                {...formik.getFieldProps("phoneNumber")}
                                className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                                  formik.touched.phoneNumber &&
                                  formik.errors.phoneNumber
                                    ? "text-red-900"
                                    : "text-gray-900"
                                } shadow-sm ring-1 ring-inset ${
                                  formik.touched.phoneNumber &&
                                  formik.errors.phoneNumber
                                    ? "ring-red-300"
                                    : "ring-gray-300"
                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                                  formik.touched.phoneNumber &&
                                  formik.errors.phoneNumber
                                    ? "focus:ring-red-500"
                                    : "focus:ring-indigo-600"
                                } sm:text-sm sm:leading-6`}
                              />
                              {formik.touched.phoneNumber &&
                              formik.errors.phoneNumber ? (
                                <p
                                  id="errorMessage"
                                  className="text-red-600 mt-[0.5rem]"
                                >
                                  {formik.errors.phoneNumber}
                                </p>
                              ) : null}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left border-b border-[#dcdcdc] bg-[#fbfbfb] py-10 px-25 border-l-0">
                            <span>주소</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            <div className="w-4/5">
                              <input
                                type="text"
                                {...formik.getFieldProps("address")}
                                className={`block w-full rounded-md border-0 px-1.5 py-1.5 ${
                                  formik.touched.address &&
                                  formik.errors.address
                                    ? "text-red-900"
                                    : "text-gray-900"
                                } shadow-sm ring-1 ring-inset ${
                                  formik.touched.address &&
                                  formik.errors.address
                                    ? "ring-red-300"
                                    : "ring-gray-300"
                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
                                  formik.touched.address &&
                                  formik.errors.address
                                    ? "focus:ring-red-500"
                                    : "focus:ring-indigo-600"
                                } sm:text-sm sm:leading-6`}
                              />
                              {formik.touched.address &&
                              formik.errors.address ? (
                                <p
                                  id="errorMessage"
                                  className="text-red-600 mt-[0.5rem]"
                                >
                                  {formik.errors.address}
                                </p>
                              ) : null}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-20">
                  <button
                    type="button"
                    className="px-12 py-8 text-sm font-semibold text-indigo-700 rounded-md shadow-sm mr-7 bg-indigo-50 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-12 py-8 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    정보수정
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
