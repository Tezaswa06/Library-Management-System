import React from 'react';
import { Form, Input, Button, Card, notification } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const handleRegister = async (values) => {
    const { username, password, StudentName, RollNumber } = values;
    let payload = {
      email: username,
      password: password,
      studentname: StudentName,
      rollnumber: RollNumber,
    };
    try {
      let apiResponse = await axios.post("http://localhost:8081/api/auth/registerStudent", payload);
      if (apiResponse) {
        console.log(apiResponse.data);
        api.open({
          message: 'Register Successful',
          description: 'You have been registered successfully. Now you can login using your credentials.',
          duration: 10,
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      api.open({
        message: 'Register Failed',
        description: 'An error occurred during registration. Please try again later.',
        duration: 10,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGxpYnJhcnl8ZW58MHx8fHwxNjU4NDAwNTQ4&ixlib=rb-1.2.1&q=80&w=2000')" }}>
      {contextHolder}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">LIBRARY MANAGEMENT</h1>
        </div>
        <Card className="bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Register</h2>
          <Form form={form} onFinish={handleRegister}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Student Email" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="StudentName"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Student Name" className="rounded-lg" />
            </Form.Item>
            <Form.Item
              name="RollNumber"
              rules={[{ required: true, message: 'Please input your roll number!' }]}
            >
              <Input placeholder="Roll Number" className="rounded-lg" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-green-600 hover:bg-green-500 border-none rounded-lg">
                Register
              </Button>
              <Link to='/'>
                <Button type="default" className="w-full my-2 text-white font-bold bg-green-600 hover:bg-green-500 border-none rounded-lg">
                  Login Now
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
