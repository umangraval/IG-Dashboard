import React, { useState, useEffect } from 'react';
import { List } from 'antd';


function Comments(username) {
    const [Comments, setComments] = useState({});
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/insta/"+username.username+"/coms")
      .then(res => res.json())
      .then(
        (result) => {
        setComments(result);
        },
        (error) => {
        }
      )    
      }, )
    
    return (
        <div>
          <h2>Comments</h2>
            <List
        bordered
        dataSource={Comments.comments}
        renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
        </div>
    );
}

export default Comments;