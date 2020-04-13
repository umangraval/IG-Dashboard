import React , { useEffect, useState} from 'react';
import {Row, Col} from 'antd';

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
          <Col>
          <img src={data.image_high_resolution_url} width="295" height="295" alt="img"/>
          </Col>          
          <Col span={12}>
          <Row>
              Likes {data.likes_count}  Comments {data.comments_count}
          </Row>
          <Row>
              {data.caption}
          </Row>
          <Row>
              {data.created_time}
          </Row>
          </Col>
        </Row>
      </div>
    );
}

export default Post;
