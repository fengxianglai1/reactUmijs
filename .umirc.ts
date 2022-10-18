import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/home' ,
      routes:[
        { path: '/home/content1', component: '@/pages/content1' },
        { path: '/home/content2', component: '@/pages/content2' }
      ]

  }],
  title:'demo',
  proxy:{
    '/api':{
      'target':'http://192.168.2.1',
      'changeOrigin':true,
      'pathRewrite':{'^/api':''}
    }
  },
  alias:{
    'src':path.resolve(__dirname,'src/'),
    'public':path.resolve(__dirname,'public/'),
  },
  fastRefresh: {},
});
