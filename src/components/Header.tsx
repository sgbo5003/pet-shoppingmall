import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore.ts";
import { api } from "../api/index.ts";
import { AxiosError } from "axios";
import { ErrorDto } from "../api/dto/index.ts";

const Header = () => {
  const { userInfo, deleteUserInfo } = useUserStore();

  const location = useLocation();
  const Navigate = useNavigate();

  const logout = async (sessionYn) => {
    await deleteUserInfo();
    if (sessionYn === "Y") {
      await api.get("/auth/logout");
      await Navigate("/");
    }
  };

  const checkSessionStatus = async () => {
    try {
      const response = await api.get("/session/status");
      if (response.data.loggedIn) {
      } else {
        // await alert("세션이 만료되었습니다.");
        await logout("N");
      }
    } catch (e) {
      const err = e as AxiosError<ErrorDto>;
      console.log("err", err);
    }
  };

  useEffect(() => {
    // if (
    //   localStorage.getItem("userStorage") === "" ||
    //   localStorage.getItem("userStorage") === null
    // ) {
    //   deleteUserInfo();
    //   return;
    // }
    checkSessionStatus();
    const userStorage = JSON.parse(localStorage.getItem("userStorage") ?? "");
    if (
      location.pathname.startsWith("/login") ||
      location.pathname.startsWith("/join")
    ) {
      if (userStorage.state.userInfo.email !== "") {
        // 로그인 되어있을시
        Navigate("/");
        return;
      }
    }
    // if (
    //   !(
    //     location.pathname.startsWith("/login") ||
    //     location.pathname.startsWith("/join")
    //   )
    // ) {
    //   if (userStorage.state.userInfo.email === "") {
    //     Navigate("/");
    //     return;
    //   }
    // }
    // }, [location.pathname, userInfo]);
  }, [location.pathname, userInfo]);
  return (
    <div id="header" className="relative w-full">
      <div className="headerTop border-b border-[#eaeaea]">
        <div className="after:clear-both after:block max-w-[1240px] mx-auto my-0">
          <div className="float-left">
            <div className="py-9">
              <Link to="/">
                <img
                  className="w-8 h-8"
                  src="/image/shiba.png"
                  alt="홈 이미지"
                />
              </Link>
            </div>
          </div>
          <div className="float-right">
            <div>
              <ul>
                {userInfo.email !== "" ? (
                  <>
                    <li className="float-left ml-20">
                      <a className="leading-[50px]" onClick={() => logout("Y")}>
                        로그아웃
                      </a>
                    </li>
                    <li className="float-left ml-20">
                      <Link className="leading-[50px]" to="/join">
                        회원정보수정
                      </Link>
                    </li>
                    <li className="float-left ml-20">
                      <Link className="leading-[50px]" to="/myPage">
                        마이페이지
                      </Link>
                    </li>
                    <li className="float-left ml-20">
                      <a className="leading-[50px]" href="#!">
                        장바구니
                      </a>
                    </li>
                    {userInfo.adminYn === "Y" && (
                      <li className="float-left ml-20">
                        <Link className="leading-[50px]" to="/admin">
                          Admin
                        </Link>
                      </li>
                    )}
                  </>
                ) : (
                  <>
                    <li className="float-left ml-20">
                      <Link className="leading-[50px]" to="/login">
                        로그인
                      </Link>
                    </li>
                    <li className="float-left ml-20">
                      <Link className="leading-[50px]" to="/join">
                        회원가입
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="headerContent border-b border-[#eaeaea]">
        <div className="max-w-[1240px] mx-auto my-0 bg-orange-200 h-36"></div>
      </div>
      <div className="headerGnb border-b border-[#eaeaea] h-12">
        <div className="max-w-[1240px] mx-auto my-0 h-full">
          <div className="h-full">
            <ul className="flex items-center justify-around h-full">
              <li>
                <a href="#!">강아지 상품</a>
              </li>
              <li>
                <a href="#!">커뮤니티</a>
              </li>
              {/* <li>
                <a href="#!">리뷰</a>
              </li>
              <li>
                <a href="#!">방문 신청</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
