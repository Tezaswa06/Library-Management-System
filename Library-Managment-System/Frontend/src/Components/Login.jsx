import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card } from 'antd';
import axios from 'axios';



const Login = ({setIsAuthenticated}) => {
    const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async(values) => {
    // Add your authentication logic here
    const { username, password } = values;
    let payload = {
        email : username,
        password : password
    }
    let apiResponse = await axios.post("http://localhost:8081/api/auth/loginStudent",payload)
    if(apiResponse){
        console.log(apiResponse);
        localStorage.setItem('user', JSON.stringify({ username }));
        setIsAuthenticated(true)
        navigate('/Profile')
    }
    


  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <Form form={form} onFinish={handleLogin}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="Studentemail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">Login</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
    
  )
}

export default Login