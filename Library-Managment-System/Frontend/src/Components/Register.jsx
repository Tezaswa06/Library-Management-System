import React from 'react';
import { Form, Input, Button, Card } from 'antd'; // Import necessary components from Ant Design
import axios from 'axios';

const Register = () => {
  const [form] = Form.useForm(); // Initialize form

  const handleRegister = async (values) => {
    // Add your authentication logic here
    const { username, password, StudentName, RollNumber } = values;
    let payload = {
      email: username,
      password: password,
      name: StudentName,
      rollnumber: RollNumber,
    };
    try {
      let apiResponse = await axios.post("http://localhost:8081/api/auth/registerStudent", payload);
      if (apiResponse) {
        console.log(apiResponse.data); // Log the response data
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <Form form={form} onFinish={handleRegister}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Student Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="StudentName"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="Student Name" />
          </Form.Item>
          <Form.Item
            name="RollNumber"
            rules={[{ required: true, message: 'Please input your roll number!' }]}
          >
            <Input placeholder="Roll Number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
