/**
 * 1. Vuexのストアを作成
 */
const store = new Vuex.Store({
  // ここに state, getters, mutations, actions を記述(任意)
  state: {
    count: 0
  },
  getters: {
    getCount(state){
    }
  },
  mutations: {
    setCount(state){
    }
  },
  actions: {
    setCount(context){
    }
  }
})

/**
 * 2. ルートVueインスタンスで作成したストアをオプションに追加
 */
new Vue({
  el: '#app',
  store, // store:store の略 
  mounted(){
    console.log(this.$store)
  }
})

/**
 * 上記では作成したストアを注入して、マウント後`this.$store`でコンソールで出力しています。
 */