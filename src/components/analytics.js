/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Card, Col, Row } from 'antd';
// import logo from '../user.png';
// import Loading from './Loading';
import ChartViewer from './chart';
import PieChart from './pie';
import Post from './post';
import Hashtags from './hashtags';
import Comments from './comments';
import {ArrowUpOutlined} from '@ant-design/icons';
import FadeIn from 'react-fade-in';

function Analytics(data) {
    console.log(data);

    return (
        <div className="site-card-wrapper">
            <FadeIn>
            <Row gutter={16}>
                <Col span={12}>
                    <Card style={{borderRadius: '10px'}}>
                        <Row>
                            <Col span={6}>
                                <img width="130" src={data.data['Profile pic url']} />
                            </Col>
                            <Col span={18} style={{textAlign:"right", marginLeft: "0"}}>
                                <div style={{fontSize: "30px", fontWeight: "bold"}}>  
                                    {data.data['username']}
                                </div>
                                <div style={{fontSize: '10px'}}>
                                    {data.data['Full name']}
                                </div>
                                <div>
                                    {data.data['Biography']}
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{borderRadius: '10px'}}>
                        <div style={{textAlign: "center", fontSize: "20px"}}>
                            Followers
                        </div>
                        <Row>
                        <Col span={16}>
                        <div style={{textAlign: "right", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of followers']}
                        </div>
                        </Col>
                        <Col>
                        <span style={{color: 'green'}}>
                        <ArrowUpOutlined />
                        {data.data['diff']}
                        </span>
                        </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{borderRadius: '10px'}}>
                        <div style={{textAlign: "center", fontSize: "20px"}}>
                            Following
                        </div>
                        <div style={{textAlign: "center", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of follows']}
                        </div>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{borderRadius: '10px'}}>
                        <div style={{textAlign: "center", fontSize: "20px"}}>
                            Posts
                        </div>
                        <div style={{textAlign: "center", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of published posts']}
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{marginTop: '10px'}}>
                <Col span={12}>
                <Card style={{borderRadius: '10px'}}>
                    <Post username={data.username} />
                </Card>
                </Col>
                <Col span={12}>
                <Card style={{borderRadius: '10px'}}>
                    <PieChart username={data.username} />
                </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{marginTop: '10px'}}>
                <Col span={8}>
                <Card style={{borderRadius: '10px'}}>            
                <Hashtags />
                </Card>
                </Col>
                <Col span={8}>
                <Card style={{borderRadius: '10px'}}>            
                <Comments username={data.username} />
                </Card>
                </Col>
                <Col span={8}>
                <Card style={{borderRadius: '10px'}}>
                    <ChartViewer username={data.username} />
                </Card>
                </Col>
            </Row>
            </FadeIn>
        </div>
    );
}

export default Analytics;