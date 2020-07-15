import { Input } from 'antd';
import React, { useState, useEffect } from 'react';
import { List } from 'antd';

const { Search } = Input;


function Hashtags() {
    const [keyword, setKeyword] = useState('');
    const [Hashtags, setHashtags] = useState({});
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/trending/"+keyword)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('in use effect');
        setHashtags(result);
        },
        (error) => {
        }
      )    
      }, [keyword])
    
        
    fetch("http://127.0.0.1:5000/trending/"+keyword)
    .then(res => res.json())
    .then(
        (result) => {

          console.log('outside');
        setHashtags(result);
        },
        (error) => {
        }
    ) 

    return (
        <div>
          <h2>Trending Hashtags</h2>
            <List
        header={<Search placeholder="input search text" onSearch={value => {setKeyword(value)}} enterButton />}
        bordered
        dataSource={Hashtags.hashtags}
        renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
        </div>
    );
}

export default Hashtags;