import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Button, Typography, Spin, Row, Col } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/api/student/getAllCategoriesOfBooks')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Card className="w-full max-w-3xl p-6 shadow-lg rounded-lg">
       <Link to='/Profile'><Button type='primary' className='font-bold'>Profile</Button></Link> 
        <Row justify="center" style={{ marginBottom: '20px' }}>
          <Title level={2} className="text-center">Book Categories</Title>
        </Row>
        <Row justify="center" style={{ marginBottom: '40px' }}>
          <Text type="secondary" className="text-center">
            "A book is a dream that you hold in your hand."
          </Text>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={categories}
          renderItem={category => (
            <List.Item
              actions={[
                <Button 
                  type="primary" 
                  onClick={() => navigate(`/categories/${category.categoryId}`)}
                  style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
                >
                  View Books
                </Button>
              ]}
              style={{ marginBottom: '10px', padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '8px' }}
            >
              <List.Item.Meta
                title={<span className="text-lg font-semibold">{category.categoryname}</span>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Category;
