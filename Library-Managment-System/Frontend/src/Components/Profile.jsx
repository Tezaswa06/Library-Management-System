import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, List, Typography, Spin } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography; // Corrected import for Typography components

const Profile = () => {
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/student/getStudentDetails/1')
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
    navigate('/login');
  };
  const RemoveBook = async(bookid) => {
    let apiResponse = await axios.delete(`http://localhost:8081/api/student/removeBooksFromStudent/${bookid}`)

  }
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <Title level={2}>Profile</Title>
          <Button type="primary" onClick={handleLogout}>Logout</Button>
        </div>
        <div className="mb-4">
          <Text strong>Email:</Text> <Text>{studentDetails.studemail}</Text>
        </div>
        <div className="mb-4">
          <Text strong>Books:</Text>
          <List
            itemLayout="vertical"
            dataSource={studentDetails.books}
            renderItem={book => (
              <List.Item key={book.bookid}>
                <div className='flex flex-row'>

                    <List.Item.Meta
                    title={<Text strong>{book.bookname}</Text>}
                    description={`Author: ${book.bookAuthor} | Category: ${book.category.categoryname}`} // Corrected template literals
                    />
                    <Button type='primary' danger className='relative top-8' onClick={()=> RemoveBook(book.bookid)}>Remove</Button>
                </div>
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
  );
}

export default Profile;
