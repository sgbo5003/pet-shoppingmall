import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const MyPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const customTheme: CustomFlowbiteTheme["modal"] = {
    body: {
      base: "flex-1 overflow-auto p-6",
      popup: "pt-0",
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  };

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
                  <p>박상준님의</p>
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
                          2,000
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
        popup
        theme={customTheme}
      >
        <Modal.Header>포인트 충전</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="block mb-2">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyPage;
