import React, {useEffect, useState} from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Analytics from './components/analytics';
import Loading from './components/Loading';

const { Content, Footer, Sider } = Layout;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState({});

  useEffect(() => {
    fetch("http://corona.camcann.com/api/covidai")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.account);
        },
        (error) => {
          setIsLoaded(true);
        }
      )
  }, [])

  return (
    <div>
    <Layout>
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={broken => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div align="center" style={{margin: "40px", fontSize: "28px", color: "white"}}>CovidAI</div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1">
        <UserOutlined />
        <span className="nav-text">nav 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <VideoCameraOutlined />
        <span className="nav-text">nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <UploadOutlined />
        <span className="nav-text">nav 3</span>
      </Menu.Item>
      <Menu.Item key="4">
        <UserOutlined />
        <span className="nav-text">nav 4</span>
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout>
    <Content style={{ margin: '10px 16px 0' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 854 }}>
      { isLoaded ? <Analytics  data={data} /> : <Loading />}  
    </div>
    </Content>
    <Footer style={{ textAlign: 'center'}}>By Umang Raval</Footer>
  </Layout>
</Layout>
</div>
  );
}

export default App;