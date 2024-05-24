import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const { username, password } = values;
    let payload = {
      studemail: username,
      password: password,
    };
    let apiResponse = await axios.post("http://localhost:8081/api/auth/loginStudent", payload);
    if (apiResponse) {
      console.log(apiResponse);
      console.log(apiResponse.data.id);
      localStorage.setItem("studentId",apiResponse.data.id)
      localStorage.setItem('user', JSON.stringify({ username }));
      setIsAuthenticated(true);
      navigate('/Profile');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGxpYnJhcnl8ZW58MHx8fHwxNjU4NDAwNTQ4&ixlib=rb-1.2.1&q=80&w=2000')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-md p-8">
        <div className="mb-8 text-center">
   
          <h1 className="text-4xl font-bold text-white">LIBRARY MANAGEMENT</h1>
        </div>
        <Card className="bg-white bg-opacity-90 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Login</h2>
          <Form form={form} onFinish={handleLogin}>
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Student Email" className="rounded-lg" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="Password" className="rounded-lg" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="font-bold w-full bg-green-600 hover:bg-green-500 border-none rounded-lg">Login</Button>
            <Link to='/register'> <Button type="primary" htmlType="submit" className="w-full font-bold bg-green-600 hover:bg-green-500 border-none rounded-lg my-2">Register Now</Button></Link> 
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
