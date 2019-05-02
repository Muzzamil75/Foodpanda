import { Card, Col, Row } from 'antd';
import React from 'react'
const Cards = () => {
    return(

        <div style={{ background: 'white', padding: '20px',margin:10 }}>
        <Row gutter={20} >
          <Col span={4}>
            <Card  title="Users" hoverable ={true} bordered={true}>Users details</Card>
          </Col>
          <Col span={4}>
            <Card  title="Categories" hoverable ={true} bordered={true}>Get Categories</Card>
          </Col>
          <Col span={4}>
            <Card color='red' title="Product" hoverable ={true}bordered={true}>Product Info</Card>
          </Col>
          <Col span={4}>
            <Card  title="Rules"  hoverable ={true} bordered={true}>User Rules</Card>
          </Col>
        </Row>
      </div>
    )}
    
;

export default Cards;
