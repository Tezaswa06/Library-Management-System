import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Button, Typography, Spin } from 'antd';
import axios from 'axios';

const { Title } = Typography;

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl">
        <Title level={2} className="text-center">Categories</Title>
        <List
          itemLayout="horizontal"
          dataSource={categories}
          renderItem={category => (
            <List.Item
              actions={[
                <Button 
                  type="primary" 
                  onClick={() => navigate(`/categories/${category.categoryId}`)}
                >
                  View Books
                </Button>
              ]}
            >
              <List.Item.Meta
                title={<span className="text-lg font-semibold">{category.categoryname}</span>}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

export default Category