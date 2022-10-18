import http from './http';

const api ={
    getToken:function(params={}){
        http.post('/api/geToken',params)
    }
}

export default api;