import React from "react";
const MyInfo = () => {
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
              <form>
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
                            <span>아이디</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            sgbo5003
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left border-b border-[#dcdcdc] bg-[#fbfbfb] py-10 px-25 border-l-0">
                            <span>아이디</span>
                          </th>
                          <td className="py-15 pl-15 border-b border-[#dcdcdc]">
                            sgbo5003
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
