/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Card, Col, Row } from 'antd';
// import logo from '../user.png';
// import Loading from './Loading';
import ChartViewer from './chart';
import PieChart from './pie';
import Post from './post';

function Analytics(data) {
    return (
        <div className="site-card-wrapper">
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
                        <div style={{textAlign: "center", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of followers']}
                        </div>
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
                    <Post />
                </Card>
                </Col>
                <Col span={12}>
                <Card style={{borderRadius: '10px'}}>
                    <PieChart />
                </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{marginTop: '10px'}}>
                <Col span={12}>
                <Card style={{borderRadius: '10px'}}>            
                coming
                </Card>
                </Col>
                <Col span={12}>
                <Card style={{borderRadius: '10px'}}>
                    <ChartViewer />
                </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Analytics;