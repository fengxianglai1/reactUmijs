import { Button, Checkbox, Form, Input } from 'antd';
import React,{useState,useEffect} from 'react';
import { history,useDispatch,useSelector } from 'umi';
import './index.less';
import http from 'src/js/api'
const Index = () => {

  const dispatch = useDispatch();
  const [loginData,setloginData] = useState({userName:'',passWord:''})
  const [btnLoading,setBtnLoading] = useState(false)

  useEffect(()=>{
    return ()=>(setBtnLoading(false))
  },[])


  const onFinish = async (values: any) => {

  //开发时放开
   /*  
    setBtnLoading(true)
    let res = await http.getToken(values);//登录
    setTimeout(()=>{//防止重复点击
      setBtnLoading(false)
    },1000)
    
    if(res.code!=0)return;
    localStorage.setItem("token",res.data.token)
    dispatch({type:'store/setToken',payload:res.data.token}) */


    history.push({pathname:'/home/content1',query:{page:'1'}});//url传参
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      id='Index'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
          value={loginData.userName}
          onChange ={e=>{setloginData({...loginData,userName:e.target.value})}}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={btnLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;