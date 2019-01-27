import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

/**
 * ここからは Vue Router によるルーティング設定
 */
// import Home from './pages/Home'
// import About from './pages/About'
// import Blog from './pages/Blog'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const routes = [
//   {path: '/', component: Home},
//   {path: '/about', component: About},
//   {path: '/blog', component: Blog},
// ]

// const router = new VueRouter({
//   routes
// })


/**
 * ここからは Vuex による状態管理
 */
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     blogArray: [
//       {id: 4, date: '2019/1/26', title: 'Vuexで状態管理だ'},
//       {id: 3, date: '2019/1/25', title: 'Vue Routerを使うぞ'},
//       {id: 2, date: '2019/1/21', title: 'Vue CLIを使ったけどこれは便利!'},
//       {id: 1, date: '2019/1/18', title: 'Vue.jsをはじめてみた'}
//     ]
//   },
//   getters: {
//   },
//   mutations: {
//     addBlog(state, payload){
//       state.blogArray.unshift(payload)
//     }
//   },
//   actions: {
//     addBlog(context, title){
//       const payload = {}
//       // 現在日付
//       const date = new Date()
//       const dateStr = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
//       payload.title = title
//       payload.date = dateStr
//       context.commit('addBlog', payload)
//     }
//   }
// })


/**
 * Vueインスタンスの生成
 */
new Vue({
  render: h => h(App),
}).$mount('#app')
