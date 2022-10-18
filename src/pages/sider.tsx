import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu,Button } from 'antd';
import React, { useState } from 'react';
import { history } from 'umi';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/home/content1', <PieChartOutlined />),
  getItem('Option 2', '/home/content2', <DesktopOutlined />),
 /*  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]), */
];

const Siders = () => {
  const [collapsed, setCollapsed] = useState(false);
  let selectItem:any = history.location.pathname || '/home/content1'
  console.log(history.location,'pathname')
  const changeMenu = (item:any)=>{
    history.push(item.key)
    console.log(item)
  }
  const _collapsed = ()=>{
    setCollapsed(!collapsed)
  }
  

  return (
    <Layout style={{ minHeight: '100vh' }}>      
      <Sider collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[selectItem]} onClick={changeMenu} mode="inline" items={items} />
      </Sider>
      <Button type='primary' style={{position:'fixed',bottom:'10px',left:'15px'}} onClick={_collapsed}>
        {collapsed?<MenuFoldOutlined />:<MenuUnfoldOutlined />}
      </Button>
    </Layout>
  );
};

export default Siders;