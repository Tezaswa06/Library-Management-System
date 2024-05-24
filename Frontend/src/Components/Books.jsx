import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, List, Button, Typography, Spin, Row, Col } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;

const Books = () => {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const addBook = async(book)=>{
    console.log("bookId",book);
    const studentId = localStorage.getItem("studentId")
      let payload = {
          bookId : book,
          studentId : studentId
      }
      let apiResponse = await axios.post("http://localhost:8081/api/student/addBooks",payload)
      if(apiResponse){
          alert("book added successfully")
      }
  }

  useEffect(() => {
    axios.get(`http://localhost:8081/api/student/getAllBooksByCategories/${categoryId}`)
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
        setLoading(false);
      });
  }, [categoryId]);

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
        <Row justify="center" style={{ marginBottom: '20px' }}>
          <Title level={2} className="text-center">Books</Title>
        </Row>
        <Row justify="center" style={{ marginBottom: '40px' }}>
          <Text type="secondary" className="text-center">
            "A room without books is like a body without a soul."
          </Text>
        </Row>
        <List
          itemLayout="horizontal"
          dataSource={books}
          renderItem={book => (
            <List.Item
              actions={[
                <Button 
                  type="primary" 
                  style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
                  onClick={()=>addBook(book.bookid)}
                >
                  Add Book
                </Button>
              ]}
              style={{ marginBottom: '10px', padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '8px' }}
            >
              <List.Item.Meta
                title={<span className="text-lg font-semibold">{book.bookname}</span>}
                description={`Author: ${book.bookAuthor}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default Books;
