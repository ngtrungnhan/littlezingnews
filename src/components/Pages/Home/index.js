import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import HeaderComponent from "../../Header";
import DefaultComponent from "./../../DefaultComponent/index";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label
} from "reactstrap";

const HomeComponent = () => {
  var arrLeft = [
    {
      id: 1,
      img: "https://znews-photo.zadn.vn/w210/Uploaded/jaegtn/2021_12_23/Putin_Interview.JPG",
      title: "Tổng thống Putin không loại trừ khả năng xảy ra chiến tranh",
      description:
        "Tổng thống Vladimir Putin cho biết Moscow quyết duy trì ảnh hưởng tại vùng lãnh thổ từng thuộc về Nga trong lịch sử."
    },
    {
      id: 2,
      img: "https://znews-photo.zadn.vn/w210/Uploaded/zxgorz/2021_12_23/phe_bia.jpg",
      title: "Phát hiện 125 người dương tính ma túy ở beer club tại TP.HCM",
      description:
        "Ập vào beer club Redline ở quận 10, cảnh sát phát hiện 125 người dương tính với ma túy."
    },
    {
      id: 3,
      img: "https://znews-photo.zadn.vn/w210/Uploaded/ofh_huqfztmf/2021_12_23/GetPaidStock.com_61c47a72d8f3d.jpg",
      title: "Trang cá nhân của trọng tài người Qatar bị tấn công",
      description:
        "Những quyết định khó hiểu trong hiệp một trận bán kết AFF Cup 2020 giữa tuyển Việt Nam và Thái Lan của trọng tài Al Adba Saoud Ali khiến dư luận phẫn nộ."
    },
    {
      id: 4,
      img: "https://znews-photo.zadn.vn/w210/Uploaded/ohunuai/2021_12_23/b11ccb5f666fac31f57e_1.jpg",
      title: "Quốc Cơ, Quốc Nghiệp phá kỷ lục thế giới",
      description:
        "Anh em nghệ sĩ xiếc đã phá kỷ lục thế giới của chính mình khi chồng đầu đi trên 100 bậc thang nhà thờ Girona ở Tây Ban Nha."
    },
    {
      id: 5,
      img: "https://znews-photo.zadn.vn/w210/Uploaded/ofh_btgazspf/2021_12_23/282_1.jpg",
      title: "Làn sóng bỏ việc bùng nổ toàn cầu",
      description:
        "Hậu đại dịch, người lao động khắp nơi trên thế giới sẵn sàng chấp nhận rủi ro lớn để tìm kiếm con đường mới trong sự nghiệp, với kỳ vọng cân bằng giữa cuộc sống và công việc."
    }
  ];

  var arrMid = [
    {
      id: 1,
      img: "https://znews-photo.zadn.vn/w960/Uploaded/aopuoax/2019_12_07/park_hang_seo_hop_bao.jpg",
      title: "HLV Park: 'Trọng tài nên xem lại trận thua của tuyển Việt Nam'.",
      description:
        "Phát biểu trong cuộc họp báo sau trận bán kết lượt đi AFF Cup 2020, HLV Park Hang-seo cho biết: Tôi không muốn nhắc đến vấn đề trọng tài. Trọng tài nên xem lại trận thua của tuyển Việt Nam. Chỉ mong ông ấy, nếu có cơ hội, thì nên xem lại băng ghi hình trận đấu. Thất bại của tuyển Việt Nam khiến ông Park chịu nhiều áp lực theo HLV Park Hang-seo chia sẻ"
    }
  ];

  var arrRight = [
    {
      id: 1,
      img: "https://znews-photo.zadn.vn/w480/Uploaded/aobohun/2021_12_10/60cf52aaef9c25c27c8d_zin.jpg",
      title: "Công an TP.HCM: Không nên nghĩ cứ liên quan Việt Á là vi phạm",
      description:
        "Đại diện Công an TP.HCM đề nghị khách quan trong việc đưa tin về việc mua, sử dụng kit test của Công ty Việt Á, tránh tạo áp lực cho các cơ quan y tế."
    },
    {
      id: 2,
      img: "https://znews-photo.zadn.vn/w480/Uploaded/natmzz/2021_12_23/6d39813af6093c576518.jpg",
      title: "HLV Park thua ông Polking ở bán kết lượt đi AFF Cup",
      description:
        "Lần đầu tiên trong sự nghiệp dẫn dắt tuyển Việt Nam, huấn luyện viên Park Hang-seo phải nhận thất bại trước một đối thủ Đông Nam Á."
    }
  ];

  const [idDelLeft, setIdDelLeft] = useState("1");
  const [idDelMid, setIdDelMid] = useState("1");
  const [idDelRight, setIdDelRight] = useState("1");
  const [value, setValue] = useState("arrLeft");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [arrLeftt, setArrLeft] = useState(arrLeft);

  const [arrMidd, setArrMid] = useState(arrMid);
  const [arrRightt, setArrRight] = useState(arrRight);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [valueId, setValueId] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [valueDes, setValueDes] = useState("");

  const handleOnChangeTitle = event => {
    setTitle(event.target.value);
  };
  const handleOnChangeDes = event => {
    setDescription(event.target.value);
  };

  const handleAdd = () => {
    const itemAdd = {
      title: title,
      description: description
    };
    if (value === "arrLeft") {
      const id = arrLeft.length + 1;
      setArrLeft([...arrLeftt, { id, ...itemAdd }]);
    } else if (value === "arrMid") {
      const id = arrMidd.length + 1;
      setArrMid([...arrMidd, { id, ...itemAdd }]);
    } else {
      const id = arrRightt.length + 1;
      setArrRight([...arrRightt, { id, ...itemAdd }]);
    }
  };

  const handleDeleteLeft = () => {
    let currentArrLeft = arrLeftt;
    currentArrLeft = currentArrLeft.filter(
      item => item.id !== parseInt(idDelLeft)
    );
    setArrLeft(currentArrLeft);
  };
  const handleDeleteMid = () => {
    let currentArrMid = arrMidd;
    currentArrMid = currentArrMid.filter(
      item => item.id !== parseInt(idDelMid)
    );
    setArrMid(currentArrMid);
  };
  const handleDeleteRight = () => {
    let currentArrRight = arrRightt;
    currentArrRight = currentArrRight.filter(
      item => item.id !== parseInt(idDelRight)
    );
    setArrMid(currentArrRight);
  };
  const openModal = item => {
    setIsOpenModal(true);
    setValueId(item.id);
    setValueTitle(item.title);
    setValueDes(item.description);
  };
  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleEdit = () => {
    const itemEdit = {
      id: valueId,
      title: valueTitle,
      description: valueDes
    };

    const arrLefttCopy = [...arrLeftt];
    const arrMiddCopy = [...arrMidd];
    const arrRightCopy = [...arrRightt];

    const objIndexLeft = arrLefttCopy.findIndex(
      item => item.id === itemEdit.id
    );
    const objIndexMid = arrMiddCopy.findIndex(item => item.id === itemEdit.id);
    const objIndexRight = arrRightCopy.findIndex(
      item => item.id === itemEdit.id
    );
    if (value === "arrLeft") {
      arrLefttCopy[objIndexLeft].title = itemEdit.title;
      arrLefttCopy[objIndexLeft].description = itemEdit.description;
      setArrLeft(arrLefttCopy);
      closeModal();
    } else if (value === "arrMid") {
      arrMiddCopy[objIndexMid].title = itemEdit.title;
      arrMiddCopy[objIndexMid].description = itemEdit.description;
      setArrMid(arrMiddCopy);
      closeModal();
    } else {
      arrRightCopy[objIndexRight].title = itemEdit.title;
      setArrRight(arrRightCopy);
      closeModal();
    }

    return;
  };

  return (
    <>
      <Modal isOpen={isOpenModal}>
        <ModalHeader toggle={() => closeModal()}>EDIT FORM</ModalHeader>
        <ModalBody>
          <label>🆔&nbsp;</label>
          <input
            className="modalInput"
            readonly
            type="text"
            value={valueId}
          />{" "}
          <br />
          <label>📇&nbsp;</label>
          <input
            className="modalInput"
            type="text"
            value={valueTitle}
            onChange={e => setValueTitle(e.target.value)}
          />{" "}
          <br />
          <label>📄&nbsp;</label>
          <input
            className="modalInput"
            type="text"
            value={valueDes}
            onChange={e => setValueDes(e.target.value)}
          />{" "}
          <br />
          <Label>🚩&nbsp;</Label>
          <select
            className="select"
            onChange={event => setValue(event.target.value)}
          >
            <option value="arrLeft">LEFT</option>
            <option value="arrMid">MIDDLE</option>
            <option value="arrRight">RIGHT</option>
          </select>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleEdit()}>
            SAVE
          </Button>{" "}
          <Button onClick={() => closeModal()}>CANCEL</Button>
        </ModalFooter>
      </Modal>

      <br />
      <div className="container">
        <div className="container__left">
          <DefaultComponent
            data={arrLeftt}
            class="container__left__item"
            showDes={false}
            hide={true}
          />
          <div className="delete">
            <button className="custom-btn" onClick={handleDeleteLeft}>
              DELETE
            </button>
            <select onClick={event => setIdDelLeft(event.target.value)}>
              {arrLeftt.map(itemLeft => (
                <option value={itemLeft.id} key={itemLeft.id}>
                  {itemLeft.id}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="container__rightx2">
          <div className="container__mid">
            <DefaultComponent data={arrMidd} showDes={true} hide={true} />
            <div className="delete">
              <button className="custom-btn" onClick={handleDeleteMid}>
                DELETE
              </button>
              <select onClick={event => setIdDelMid(event.target.value)}>
                {arrMidd.map(itemMid => (
                  <option value={itemMid.id} key={itemMid.id}>
                    {itemMid.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="container__right">
            <DefaultComponent
              data={arrRightt}
              class="container__right__item"
              hide={true}
            />
            <div className="delete">
              <button className="custom-btn" onClick={handleDeleteRight}>
                DELETE
              </button>
              <select onClick={event => setIdDelRight(event.target.value)}>
                {arrRightt.map(itemRight => (
                  <option value={itemRight.id} key={itemRight.id}>
                    {itemRight.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="crud">
        <h3>CREATE A NEW </h3>
        <label>📇&nbsp;</label>
        <input
          type="text"
          className="crudTitle"
          placeholder="Enter a title"
          onChange={event => handleOnChangeTitle(event)}
        />{" "}
        <br />
        <label>📄&nbsp;</label>
        <input
          type="text"
          className="crudDes"
          placeholder="Enter a description"
          onChange={event => handleOnChangeDes(event)}
        />{" "}
        <br />
        <label>🚩&nbsp;</label>
        <select onChange={event => setValue(event.target.value)}>
          <option value="arrLeft">LEFT</option>
          <option value="arrMid">MIDDLE</option>
          <option value="arrRight">RIGHT</option>
        </select>{" "}
        <br />
        <button className="custom-btn add" onClick={() => handleAdd()}>
          CREATE
        </button>
      </div>
      <br />
      <hr />
      <br />

      <h2> EDIT NEWS</h2>
      <br />
      <p className="tablelocation">🚩&nbsp;LEFT SIDE</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {arrLeftt &&
          arrLeftt.map((item, index) => (
            <>
              <tbody>
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btnTable"
                      onClick={() => openModal(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
      <p className="tablelocation">🚩&nbsp;MIDDLE SIDE</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {arrMidd &&
          arrMidd.map((item, index) => (
            <>
              <tbody>
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btnTable"
                      onClick={() => openModal(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
      <p className="tablelocation">🚩&nbsp;RIGHT SIDE</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {arrRight &&
          arrRight.map((item, index) => (
            <>
              <tbody>
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      className="btnTable"
                      onClick={() => openModal(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
      </table>
    </>
  );
};
export default HomeComponent;
