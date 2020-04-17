import React, {useEffect, useState} from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, UserOutlined } from '@ant-design/icons';
import Analytics from './components/analytics';
import Loading from './components/Loading';
import Alert from './components/alert';
import { Input } from 'antd';

const { Search } = Input;

const { Content, Footer, Sider } = Layout;

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState({});
  const [username, setUsername] = useState('manojraval');
  
  useEffect(() => {
    fetch("http://corona.camcann.com/api/"+username)
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
  }, [username])

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
    <div align="center" style={{margin: "40px", fontSize: "28px", color: "white"}}>{username}</div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1">
      <DashboardOutlined />
        <span className="nav-text">Dashboard</span>
      </Menu.Item>
      <Menu.Item key="2">
        <UserOutlined />
        <span className="nav-text">About</span>
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout>
    <Content style={{ margin: '10px 16px 0' }}>
      <Search placeholder="input search text" onSearch={value => setUsername(value)} enterButton />
      <div className="site-layout-background" style={{ padding: 24, minHeight: 854 }}>
      { <Alert /> }
      { isLoaded ? <Analytics  username={username} data={data} /> : <Loading />}  
    </div>
    </Content>
    <Footer style={{ textAlign: 'center'}}>By Umang Raval</Footer>
  </Layout>
</Layout>
</div>
  );
}

export default App;