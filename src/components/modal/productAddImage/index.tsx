import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Swal from "sweetalert2";
import "../productAddImage/index.scss";
import { FileProps, productFormValues } from "../../Admin";

const ProductImageModal = (props: {
  form: productFormValues;
  setValues: (values: React.SetStateAction<productFormValues>) => void;
  setAddImgModalOn: Dispatch<SetStateAction<boolean>>;
}) => {
  const { form, setValues, setAddImgModalOn } = props;
  const [tabIndex, setTabIndex] = useState<number>(1);
  const [file, setFile] = useState<FileProps[]>([]);
  const [dragOverFlag, setDragOverFlag] = useState<boolean>(false);
  const [descriptionBoxAbsolutePosition, setDescriptionBoxAbsolutePosition] =
    useState<{ top: number; left: number }>({
      top: 0,
      left: 0,
    });
  const [isDescriptionBoxOpen, setIsDescriptionBoxOpen] = useState<{
    name: string;
    isOpen: boolean;
  }>({
    name: "",
    isOpen: false,
  }); // 상태
  const spanRef = useRef<HTMLSpanElement>(null);
  let enterTarget: any = null;

  const encodeFileToBase64 = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileBlob: any
  ) => {
    if (
      !(
        fileBlob[0].type === "image/jpg" ||
        fileBlob[0].type === "image/jpeg" ||
        fileBlob[0].type === "image/png"
      )
    ) {
      // Swal.fire({
      //   icon: 'warning',
      //   title: '올바른 파일형식이 아닙니다.',
      //   customClass: {
      //     title: 'swal2_title',
      //   },
      // });
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-right",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', Swal.stopTimer);
        //   toast.addEventListener('mouseleave', Swal.resumeTimer);
        // },
      });
      Toast.fire({
        icon: "error",
        title: `올바른 파일형식이 아닙니다.`,
      });
      return;
    }
    const pushData = [...file];
    for (let i = 0; i < fileBlob.length; i++) {
      const reader = new FileReader();
      const URL = window.URL || window.webkitURL;
      const img = new Image();
      img.src = URL.createObjectURL(fileBlob[i]);
      reader.readAsDataURL(fileBlob[i]);
      new Promise<void>((resolve) => {
        reader.onload = () => {
          img.onload = () => {
            pushData.push({
              file: fileBlob[i],
              imageSrc: String(reader.result),
              imageSize: { width: img.width, height: img.height },
            });
            setTimeout(() => {
              setFile(pushData);
            }, 150);
          };
          resolve();
        };
      });
    }
  };

  const fileInputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const files = input.files;
    // console.log('files', files);
    if (files?.length != 0) {
      if (files !== null) {
        if (
          !(
            files[0].type === "image/jpg" ||
            files[0].type === "image/jpeg" ||
            files[0].type === "image/png"
          )
        ) {
          // Swal.fire({
          //   icon: 'warning',
          //   title: '올바른 파일형식이 아닙니다.',
          //   customClass: {
          //     title: 'swal2_title',
          //   },
          // });
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-right",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            // didOpen: (toast) => {
            //   toast.addEventListener('mouseenter', Swal.stopTimer);
            //   toast.addEventListener('mouseleave', Swal.resumeTimer);
            // },
          });
          Toast.fire({
            icon: "error",
            title: `올바른 파일형식이 아닙니다.`,
          });
          return;
        }
        encodeFileToBase64(e, files);
      }
    }
  };

  const deleteImg = (idx: number) => {
    setFile(file.filter((el, index) => index !== idx));
  };

  const dragFunction = (event: any, type: string) => {
    event.preventDefault();
    event.stopPropagation();
    if (type == "enter") {
      enterTarget = event.target;
      setDragOverFlag(true);
    } else if (type == "leave") {
      if (enterTarget == event.target) {
        setDragOverFlag(false);
      }
    } else if (type == "drop") {
      setDragOverFlag(false);
      if (event.dataTransfer.files.length != 0) {
        encodeFileToBase64(event, event.dataTransfer.files);
      }
    } else if (type == "end") {
      setDragOverFlag(false);
    }
  };

  const imgSubmit = () => {
    let newArr = [...form.imgFiles];
    newArr = newArr.concat(file);
    // if (form.imgUpdateFile.length > 0) {
    //   // console.log('123');
    //   // console.log('newArr[newArr.length - 1]', newArr[newArr.length - 1]);
    //   setValues({
    //     ...form,
    //     imgFile: newArr,
    //     previewImg: newArr[newArr.length - 1],
    //     imgUpdateFile: [],
    //   });
    // } else {
    //   if (newArr.length > 1) {
    //     // alert('이미지는 최대 1개까지 등록할 수 있습니다.');
    //     Swal.fire({
    //       icon: "warning",
    //       title: `${t("creative:validation.modal.addImageModal.toast2")}`,
    //       width: "40em",
    //       customClass: {
    //         title: "swal2_title",
    //       },
    //     });
    //     return;
    //   }
    //   setValues({
    //     ...creativeForm,
    //     imgFile: newArr,
    //     previewImg: newArr[newArr.length - 1],
    //   });
    // }
    setAddImgModalOn(false);
  };

  return (
    <>
      <div className="layer_body">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="styles.tab_g8">
            <Tab
              className={tabIndex == 0 ? "on" : ""}
              style={{ display: "none" }}
            >
              <a className="link_tab">이미지 불러오기</a>
            </Tab>
            <Tab className={tabIndex == 1 ? "on" : ""}>
              <a className="link_tab">직접 업로드</a>
            </Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel>
            <div className="group_info">
              <div className="guide_section">
                <div className="guide_item">
                  <span id="creatveGuide">
                    <a className="link_guide">소재 등록 가이드</a>
                  </span>
                </div>
                {/* <div className={styles.guide_item}>
                  <span>
                    <a className={styles.link_guide}>심사 가이드</a>
                  </span>
                </div> */}
              </div>
              <span className="box_inpfile">
                <label htmlFor="file" className={"btn_gs" + " " + "inner_g"}>
                  <span className="inner_g">
                    <BsPlus size={20} />
                    파일 업로드
                  </span>
                </label>
                <input
                  type="file"
                  id="file"
                  className="inp_file"
                  accept="image/*"
                  onChange={(e) => {
                    fileInputHandleChange(e);
                  }}
                  // multiple={true}
                />
              </span>
            </div>
            <div
              className={
                "group_material" +
                `${
                  file.length == 0 && dragOverFlag
                    ? " on_drop drop_area_all"
                    : " on_drop"
                }` +
                `${
                  file.length != 0 && dragOverFlag
                    ? " on_drop drop_area_all"
                    : ""
                }`
              }
              onDrop={(e) => dragFunction(e, "drop")}
              onDragEnter={(e) => dragFunction(e, "enter")}
              onDragLeave={(e) => dragFunction(e, "leave")}
              onDragOver={(e) => dragFunction(e, "over")}
              onDragEnd={(e) => dragFunction(e, "end")}
            >
              <div
                className={
                  "drop_area" +
                  `${file.length == 0 || dragOverFlag ? " d-block" : " d-none"}`
                }
              >
                <div className="file_item_area">
                  <label
                    htmlFor="file"
                    className={`${dragOverFlag ? "bg-file" : ""}`}
                  >
                    <span className="file_img_area" ref={spanRef}>
                      <AiFillPicture
                        style={{
                          marginTop: "15px",
                          width: "25px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <span className="file_txt_area">
                      <span className="txt_upload">
                        업로드할 이미지를 끌어다 놓으세요.
                      </span>
                    </span>
                  </label>
                  {/* <input type="file" id="file" className="d-none" accept="image/*" multiple={true} /> */}
                  <input
                    type="file"
                    id="file"
                    className="d-none"
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="inner_material">
                <ul className="list_material">
                  {file.map((item: FileProps, idx: number) => (
                    <li className="on_order" key={idx}>
                      <a className="link_material">
                        <span className="img_file">
                          <span className="inner_img_file">
                            <img
                              src={item.imageSrc}
                              alt="preview-img"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </span>
                          <span className="frame_g"></span>
                          <span className="ico_liston">{idx + 1}</span>
                        </span>
                        <button
                          type="button"
                          className={"btn_del" + " " + "button"}
                          onClick={() => deleteImg(idx)}
                        >
                          <span className="icon_del">
                            <MdClose size={15} />
                          </span>
                        </button>
                      </a>
                      <p className="txt_file">
                        {item.imageSize.width + "x" + item.imageSize.height}
                      </p>
                      <p className="txt_filename">{item.file.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="layer_foot">
        {/* {file.length > 0 && (
          <span className={styles.txt_select}>
            <button type="button" className={styles.btn_del + ' ' + styles.button}>
              <span className={styles.ico_del}>
                <MdClose size={20} />
              </span>
            </button>
            선택된 이미지
            <span className={styles.num_select}>{file.length}</span>
          </span>
        )} */}
        {tabIndex == 1 && (
          <div className="btn_group">
            <button
              type="button"
              className="btn_gm"
              onClick={() => setAddImgModalOn(false)}
            >
              <span className="inner_g">취소</span>
            </button>
            <button
              type="button"
              className={`btn_gm gm_bl ${
                file.length < 1 ? "in_active" : ""
              } m-l-10`}
              onClick={imgSubmit}
            >
              <span className="inner_g">확인</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductImageModal;
