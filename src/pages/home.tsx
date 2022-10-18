import { Button, Checkbox, Form, Input,Layout, Menu, Spin } from 'antd';
import React from 'react';
import { history, useSelector } from 'umi';
import Headers from './header'
import Siders from './sider'


const { SubMenu } = Menu // 子菜单
const { Header, Content, Sider } = Layout // 顶部布局， 内容部分， 侧边栏
import './index.less';
const Index = (props:any) => {

  const loading = useSelector((state:any)=>state.store.loading)

  const onFinish = (values: any) => {
    history.push('/home')
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <Layout>
        <Header className='height-48 fixed64' >
          <Headers />
        </Header>
        <Layout className='mgTop64'>
          <Sider >
             <Siders />
          </Sider>
          <Content>
              <div id='milk'> {props.children} </div>
          </Content>
        </Layout>
    </Layout>
    <Spin style={{width:'100%',height:'100%'}} delay={1000} spinning={loading} size="large" tip="加载中..."></Spin>
    </div>
  );
};

export default Index;