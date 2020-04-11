/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
// import logo from '../user.png';
// import Loading from './Loading';
import ChartViewer from './chart';
import Pie from './pie';

function Analytics(data) {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={12}>
                    <Card style={{borderRadius: '20px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Row>
                            <Col span={6}>
                                <img width="150" src={data.data['Profile pic url']} />
                            </Col>
                            <Col span={18} style={{textAlign:"right", marginLeft: "0"}}>
                                <div style={{fontSize: "30px", fontWeight: "bold"}}>  
                                    {data.data['username']}
                                </div>
                                <div style={{fontSize: "20px"}}>
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
                    <Card style={{borderRadius: '20px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <div style={{textAlign: "center", fontSize: "30px"}}>
                            Followers
                        </div>
                        <div style={{textAlign: "center", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of followers']}
                        </div>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{borderRadius: '20px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <div style={{textAlign: "center", fontSize: "30px"}}>
                            Following
                        </div>
                        <div style={{textAlign: "center", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of follows']}
                        </div>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{borderRadius: '20px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <div style={{textAlign: "center", fontSize: "30px"}}>
                            Posts
                        </div>
                        <div style={{textAlign: "center", fontSize: "60px", fontWeight: "bold"}}>
                            {data.data['Number of published posts']}
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{marginTop: "20px"}}>
                <Col span={12}>
                <Card style={{borderRadius: '20px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <ChartViewer />            
                </Card>
                </Col>
                <Col span={12}>
                <Card style={{borderRadius: '20px', boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <ChartViewer />          
                </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Analytics;