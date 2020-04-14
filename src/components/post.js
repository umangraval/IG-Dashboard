import React , { useEffect, useState} from 'react';
import {Row, Col, Divider} from 'antd';
import {CommentOutlined, LikeOutlined} from '@ant-design/icons';
function Post() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch("http://corona.camcann.com/api/latest")
      .then(res => res.json())
      .then(
        (result) => {
            setData(result);
        },
        (error) => {
        }
      )
  }, [])
  
    return (
      <div className="post">
          <Row>
                <Col span={10}>
                <img src={data.image_high_resolution_url} width="295" height="295" alt="img"/>
                </Col>
                <Col span={14} style={{textAlign:"right"}}>
                    <Row>
                    <LikeOutlined /> Likes {data.likes_count} <div style={{marginLeft: "20px"}}><CommentOutlined /> Comments {data.comments_count}</div>    
                    </Row> 
                    <Row>
                    {data.caption}
                    </Row>
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
                    </Divider>
                    <Row>
                    {data.created_time}
                    </Row>
                </Col>
            </Row>
      </div>
    );
}

export default Post;
