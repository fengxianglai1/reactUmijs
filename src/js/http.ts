import axios from "axios";
import { getDvaApp, history } from "umi";
import {message } from "antd";

const service = axios.create({timeout:60000});
service.defaults.headers["Content-Type"] = 'application/json;charset-Utf-8';

service.interceptors.request.use((request:any)=>{
    //接口loading
    getDvaApp()._store.dispatch({type:'store/setLoading',payload:true})
    if(request.url.indexOf("gettoken")<0){//不是登录接口
        //有token 设置token
        if(localStorage['token']){
            request.headers['token'] = localStorage['token']
        }
    }
    return request;
})

service.interceptors.response.use((response:any)=>{
    getDvaApp()._store.dispatch({type:'store/setLoading',payload:false})
    if(response.data.code===0){//正常返回

    }else if(response.data.code==='666'){//token失效
        localStorage.clear();
        history.push('/')
    }else{//错误返回
        message.warning(response.data.message,3)
    }
    return response.data;
},error=>{
    getDvaApp()._store.dispatch({type:'store/setLoading',payload:false});
    message.warning(error.data.message,3);
    return {
        code:404
    }
})


export default service;