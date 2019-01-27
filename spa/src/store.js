/**
 * main.jsに記載されたストア設定を外部ファイル化
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    blogArray: [
      {id: 4, date: '2019/1/26', title: 'Vuexで状態管理だ'},
      {id: 3, date: '2019/1/25', title: 'Vue Routerを使うぞ'},
      {id: 2, date: '2019/1/21', title: 'Vue CLIを使ったけどこれは便利!'},
      {id: 1, date: '2019/1/18', title: 'Vue.jsをはじめてみた'}
    ]
  },
  getters: {
  },
  mutations: {
    addBlog(state, payload){
      state.blogArray.unshift(payload)
    }
  },
  actions: {
    addBlog(context, title){
      const payload = {}
      // 現在日付
      const date = new Date()
      const dateStr = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
      payload.title = title
      payload.date = dateStr
      context.commit('addBlog', payload)
    }
  }
})

export default store