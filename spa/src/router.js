/**
 * main.jsに記載されたルーティング設定を外部ファイル化
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/post', component: Post},
]
  
const router = new VueRouter({
  routes
})

export default router