import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, List, Typography, Spin, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profile.css'; // Import custom CSS for additional styling

const { Title, Text } = Typography;

const Profile = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("studentId");
    axios.get(`http://localhost:8081/api/student/getStudentDetails/${id}`)
      .then(response => {
        setStudentDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the student details!', error);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const removeBook = async (bookid) => {
    await axios.delete(`http://localhost:8081/api/student/removeBooksFromStudent/${bookid}`);
    // Update state to reflect removed book
    setStudentDetails(prevDetails => ({
      ...prevDetails,
      books: prevDetails.books.filter(book => book.bookid !== bookid)
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Spin size="large" />
      </div>
    );
  }

  return (<>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
   
      <Card className="w-full max-w-3xl profile-card" bordered={false}>
     <Link to='/category'><Button className='my-5 font-bold' type='primary'>View Collection</Button></Link> 
        <div className="flex justify-between items-center mb-4">
          <Title level={2} className="profile-title"><UserOutlined /> Profile</Title>
          <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>Logout</Button>
        </div>
      
        <div className="mb-4">
          <Text strong>Email:</Text> <Text className="profile-text ">{studentDetails.studemail}</Text>
        </div>
        <div className="mb-4">
          <Text strong>Books:</Text>
          <List
            itemLayout="vertical"
            dataSource={studentDetails.books}
            renderItem={book => (
              <List.Item key={book.bookid}>
                <div className='flex flex-row items-center justify-between'>
                  <List.Item.Meta
                    avatar={<Avatar shape="square" size="large" style={{ backgroundColor: '#f56a00' }}>{book.bookname.charAt(0)}</Avatar>}
                    title={<Text strong>{book.bookname}</Text>}
                    description={<span className="profile-text">{`Author: ${book.bookAuthor} | Category: ${book.category.categoryname}`}</span>}
                  />
                  <Button className='border-none font-bold' type="primary" danger icon={<DeleteOutlined />} onClick={() => removeBook(book.bookid)}>Remove</Button>
                </div>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
    </>
  );
}

export default Profile;
