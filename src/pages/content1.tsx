import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { history , useSelector} from 'umi';
import './index.less';
const Content1 = () => {
  const token = useSelector((state:any)=>state.store.token)

  return (
    <div id='content1'>
      content1<br/>
      {token}
    </div>
  );
};

export default Content1;