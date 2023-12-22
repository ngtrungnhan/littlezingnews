import React, { useState } from "react";
import {
  Table,
  Tag,
  Space,
  Popconfirm,
  Modal,
  Button,
  Form,
  Input,
  InputNumber
} from "antd";
import "./style.css";

const Students = props => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: text => <a>{text}</a>
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => openModal(record.id)}>Edit</Button>

          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  const arrStudents = [
    {
      id: 1,
      key: "1",
      name: "Nhan Nguyen",
      age: 22,
      phone: "0389654123",
      email: "abcxyz@gmail.com"
    },
    {
      id: 2,
      key: "2",
      name: "Trung Thanh",
      age: 20,
      phone: "0389654321",
      email: "xyzabc@gmail.com"
    },
    {
      id: 3,
      key: "3",
      name: "Tran Hieu",
      age: 27,
      phone: "0389111123",
      email: "ngochieu@gmail.com"
    },
    {
      id: 4,
      key: "4",
      name: "Nhat Phong",
      age: 18,
      phone: "0389111122",
      email: "phongle@gmail.com"
    },
    {
      id: 5,
      key: "5",
      name: "Ba Ga",
      age: 38,
      phone: "0389122123",
      email: "bestyasuo@gmail.com"
    },
    {
      id: 6,
      key: "6",
      name: "Thien Phuc",
      age: 23,
      phone: "0378811123",
      email: "nltp@gmail.com"
    },
    {
      id: 7,
      key: "7",
      name: "Thien Chi",
      age: 24,
      phone: "0368766011",
      email: "thienchi@gmail.com"
    },
    {
      id: 8,
      key: "8",
      name: "Gia Bao",
      age: 30,
      phone: "0393111221",
      email: "baodang@gmail.com"
    },
    {
      id: 9,
      key: "9",
      name: "Trung Nhan",
      age: 25,
      phone: "0388981137",
      email: "ngyntrngnh@gmail.com"
    },
    {
      id: 10,
      key: "10",
      name: "Thi Lan",
      age: 10,
      phone: "03552541301",
      email: "thilan@gmail.com"
    },
    {
      id: 11,
      key: "11",
      name: "Minh Nhat",
      age: 92,
      phone: "0333825852",
      email: "nhatminh@gmail.com"
    },
    {
      id: 12,
      key: "12",
      name: "Gia Tue",
      age: 12,
      phone: "0378465213",
      email: "ngogiatue@gmail.com"
    },
    {
      id: 13,
      key: "13",
      name: "Van Trung",
      age: 26,
      phone: "0393881111",
      email: "truongtrung@gmail.com"
    },
    {
      id: 14,
      key: "14",
      name: "Ngoc Le",
      age: 22,
      phone: "03635214785",
      email: "ngoclethao@gmail.com"
    },
    {
      id: 15,
      key: "15",
      name: "Tuan Tran",
      age: 19,
      phone: "0388777333",
      email: "tuantranphuong@gmail.com"
    },
    {
      id: 17,
      key: "17",
      name: "Duc Thanh",
      age: 27,
      phone: "0355666333",
      email: "phamducthanh@gmail.com"
    },
    {
      id: 18,
      key: "18",
      name: "A Sin",
      age: 30,
      phone: "0369857412",
      email: "asin@gmail.com"
    },
    {
      id: 19,
      key: "19",
      name: "Van Anh",
      age: 21,
      phone: "0383111222",
      email: "vananhdethuong@gmail.com"
    },
    {
      id: 20,
      key: "20",
      name: "Van C",
      age: 41,
      phone: "0377762341",
      email: "nguyenvanc@gmail.com"
    },
    {
      id: 21,
      key: "21",
      name: "Do Thi Ha",
      age: 27,
      phone: "0388127982",
      email: "hoahauvietnam@gmail.com"
    },
    {
      id: 22,
      key: "22",
      name: "Nguyen Van Troi",
      age: 100,
      phone: "0311111111",
      email: "nguyenvantroi@gmail.com"
    },
    {
      id: 23,
      key: "23",
      name: "Minh Khai",
      age: 80,
      phone: "0322222222",
      email: "nguyenthiminhkhai@gmail.com"
    },
    {
      id: 24,
      key: "24",
      name: "Le Duan",
      age: 70,
      phone: "0333333333",
      email: "leduan@gmail.com"
    },
    {
      id: 25,
      key: "25",
      name: "Truong Sa",
      age: 50,
      phone: "0344444444",
      email: "duongtruongsa@gmail.com"
    },
    {
      id: 26,
      key: "26",
      name: "Hoang Sa",
      age: 50,
      phone: "0355555555",
      email: "duonghoangsa@gmail.com"
    },
    {
      id: 27,
      key: "27",
      name: "Tran Quang Khai",
      age: 80,
      phone: "0366666666",
      email: "tranquangkhai@gmail.com"
    },
    {
      id: 28,
      key: "22",
      name: "Ly Tu Trong",
      age: 90,
      phone: "0377777777",
      email: "lytutrong@gmail.com"
    },
    {
      id: 29,
      key: "21",
      name: "Ton That Tung",
      age: 80,
      phone: "0388888888",
      email: "tonthattung@gmail.com"
    },
    {
      id: 30,
      key: "23",
      name: "Ba Thang Hai",
      age: 32,
      phone: "0323232323",
      email: "bathanghai@gmail.com"
    }
  ];
  const [visible, setVisible] = useState(false);
  const [formModal] = Form.useForm();
  const [dataArr, setDataArr] = useState(arrStudents);
  const [searchValue, setSearchValue] = useState("");

  const openModal = id => {
    const dataModal = dataArr.find(item => item.id === id);

    console.log(dataModal);

    formModal.setFieldsValue({
      id: dataModal.id,
      age: dataModal.age,
      name: dataModal.name,
      phone: dataModal.phone,
      email: dataModal.email
    });

    setVisible(true);
  };

  const createStudents = () => {
    formModal.resetFields();

    formModal.setFieldsValue({
      id: dataArr.length + 1
    });

    setVisible(true);
  };

  const onFinish = values => {
    const index = dataArr.findIndex(item => item.id === values.id);

    console.log(index);

    if (index > -1) {
      const peopleEdit = dataArr

        .filter(x => x.id === values.id)

        .map(item => (item = values));

      const newArr = dataArr.map(
        obj => peopleEdit.find(item => item.id === obj.id) || obj
      );

      setDataArr(newArr);
    } else {
      setDataArr([...dataArr, values]);
    }

    handleCancel();
  };

  const handleDelete = id => {
    setDataArr(dataArr.filter(item => item.id !== id));
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const findAllElements = key => {
    const rex = new RegExp(key, "i");
    return arrStudents.filter(item => item.name.search(rex) >= 0);
  };
  const searchInTable = searchValue => {
    setDataArr(findAllElements(searchValue));
  };
  return (
    <>
      <h2>STUDENTS PAGE</h2>
      <div className="students">
        <div className="search">
          <Form.Item name="search" label="🔎">
            <Input onChange={e => setSearchValue(e.target.value)} />
          </Form.Item>
          <Button type="primary" onClick={() => searchInTable(searchValue)}>
            SEARCH
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={createStudents}>
            CREATE
          </Button>
        </div>
        <Table columns={columns} dataSource={dataArr} />

        <Modal
          title="CREATE A NEW STUDENT"
          visible={visible}
          onCancel={handleCancel}
          footer={
            <Button type="primary" htmlType="submit" form="formModal">
              SAVE
            </Button>
          }
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            form={formModal}
            name="formModal"
            onFinish={onFinish}
          >
            <Form.Item name="id" label="ID" rules={[{ required: true }]}>
              <Input disabled />
            </Form.Item>

            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/^[0-9]+$/),
                  message: "Age must be a number !"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/^[0-9]+$/),
                  message: "invalid phone number !"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  pattern: new RegExp("/S+@S+.S+/"),
                  message: "invalid Email address !"
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};
export default Students;
