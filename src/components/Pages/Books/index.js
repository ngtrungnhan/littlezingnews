import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../Header";
import "./style.css";
import DefaultComponent from "./../../DefaultComponent/index";

const BookComponent = () => {
  var books = [
    {
      id: 1,
      img: "	https://znews-photo.zadn.vn/w480/Uploaded/mzjyy/2021_12_30/NNam.jpeg",
      title: "Khơi dậy tình yêu thiên nhiên cho trẻ",
      data: "sach1",
      description:
        "Bộ sách tranh gồm 6 cuốn mang đến cho độc giả nhí trải nghiệm học và chơi. Qua đó, các em ý thức được việc bảo vệ môi trường từ hành động nhỏ nhất."
    }
  ];

  var books2 = [
    {
      id: 2,
      img: "	https://znews-photo.zadn.vn/w480/Uploaded/mzjyy/2021_12_29/Thu_Hue.jpg",
      title: "Góc nhìn khác của mỹ thuật Việt Nam",
      data: "sach2",
      description:
        "Cuốn sách tập hợp 25 bài chuyên khảo về lịch sử mỹ thuật Việt Nam từ thời sơ sử đến nửa đầu thế kỷ 20"
    },
    {
      id: 3,
      img: "https://znews-photo.zadn.vn/w480/Uploaded/mzjyy/2021_12_28/tet_11_2_.jpg",
      title: "Những cuốn sách về văn hóa, nghệ thuật dịp cuối năm",
      data: "sach3",
      description:
        "Bộ sách Tết dành cho thiếu nhi lần đầu tiên được phát hành đồng thời bằng 4 thứ tiếng, đưa không khí ngày Tết cổ truyền đến gần hơn với các em nhỏ người Việt trên thế giới."
    },
    {
      id: 4,
      img: "	https://znews-photo.zadn.vn/w480/Uploaded/mzjyy/2021_12_27/Nha_Nam.jpg",
      title: "Những cuốn sách đưa ra dự báo về tương lai",
      data: "sach4",
      description:
        "“2030: Những xu hướng lớn sẽ định hình thế giới tương lai”, “21 bài học cho thế kỷ 21” hay “10 bài học cho thế giới hậu đại dịch” là những cuốn sách đưa ra dự báo về tương lai."
    }
  ];

  const [book, setBook] = useState(books);
  const [book2, setBook2] = useState(books2);

  return (
    <>
      <div className="bookHeader">
        <div className="contentBook">
          <DefaultComponent
            data={book}
            showDes={true}
            hide={false}
            class="bookCustom"
          />
          <div className="sectionContent">
            <DefaultComponent
              data={book2}
              showDes={false}
              class="itemSection"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BookComponent;
