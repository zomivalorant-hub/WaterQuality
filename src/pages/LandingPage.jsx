import { Button, Col, Form, message, Row, Input } from "antd";
import waterr from "../images/water.jpg";
import { UserKey } from "lucide-react";
import homebck from "../images/soft.jpg";

const LandingPage = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      {contextHolder}
      <div
        className="w-full max-w-7xl mx-auto h-full"
        style={{
          backgroundImage: `url(${homebck})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex h-lvh items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <div className="flex items-center flex-col ">
              <img
                src={waterr}
                alt=""
                style={{ position: "relative" }}
                className="flext h-36 "
              />
              <div>
                <span className="text-red-700 ml-2 font-mono text-2xl md:text-3xl">
                  Water
                </span>
                <span className="text-blue-300 ml-2 font-mono text-2xl md:text-3xl">
                  Quality
                </span>
                <span className="font-mono text-2xl md:text-3xl">
                  {" "}
                  Recording System
                </span>
              </div>
            </div>
            <div className="flex flex-col py-2 bg-mauve-300 rounded-sm shadow-md px-2 mt-4">
              <div className="font-mono text-2xl mb-3 text-center">
                Authorize User Login
              </div>
              <Form
                form={form}
                onFinish={onFinish}
                name="basic"
                autoComplete="off"
                layout="vertical"
                initialValues={{
                  loginAs: "patient",
                }}
                style={{ minWidth: "400px", maxWidth: "600px" }}
              >
                <Row gutter={8}>
                  <Col xs={24} sm={24}>
                    <Form.Item
                      className="font-semibold"
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={8} xs={24} sm={24}>
                    <Form.Item
                      className="font-semibold"
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item>
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    icon={<UserKey color="#121212" />}
                    className=" bg-red-600 font-bold text-white"
                  >
                    LOGIN
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
