// コンポーネントを定義

// 孫コンポーネント
const Grandson = {
  mounted(){
    console.log(this.$store.getters.getMessage)
  },
  template: `
    <div>
      <p>Grandson: {{ $store.getters.getMessage }}</p>
    </div>
  `
}

// 子どもコンポーネント
const Child = {
  components: {
    Grandson
  },
  template: `
    <div>
      <p>Child: {{ $store.getters.getMessage }}</p>
      <Grandson />
    </div>
  `
}

// おかあさんコンポーネント
const Parent = {
  components: {
    Child
  },
  template: `
    <div>
      <p>Parent: {{ $store.getters.getMessage }}</p>
      <Child />
    </div>
  `
}

// おかあさんコンポーネント
const Mother = {
  components: {
    Child
  },
  template: `
    <div>
      <p>Mother: {{ $store.getters.getMessage }}</p>
      <Child />
    </div>
  `
}

// おばあちゃんコンポーネント
const GrandMother = {
  components: {
    Mother
  },
  template: `
    <div>
      <p>GrandMother: {{ $store.getters.getMessage }}</p>
      <Mother />
    </div>
  `
}


/**
 * 1. Vuexのストアを作成
 */
const store = new Vuex.Store({
  // ここに state, getters, mutations, actions を記述(任意)
  state: {
    message: [
      'お前の後ろだー'
    ]
  },
  getters: {
    // state.messageの配列を'/'区切りで連結して返す
    getMessage(state){
      return state.message.join('/')
    },
    // state.messageの配列数を返す
    getMessageCount(state){
      return state.message.length
    }
  },
  mutations: {
    // state.messageに要素を追加
    addMessage(state, v){
      console.log('--- state ---')
      console.log(state)
      state.message.push(v)
    }
  },
  actions: {
    addMessage(context){
      console.log('--- context ---')
      console.log(context)
      const v = context.state.message[ context.getters.getMessageCount - 1 ] === 'お前の後ろだー'? 'フェニックスが抱きついているよ': 'お前の後ろだー'
      context.commit('addMessage', v)
    }
  }
})

/**
 * 2. ルートVueインスタンスで作成したストアをオプションに追加
 */
new Vue({
  el: '#app',
  store, // store:store の略 
  components: {
    GrandMother
  },
  methods: {
    add(){
      this.$store.dispatch('addMessage')
    }
  },
  template: `
    <div>
      <GrandMother />
      <button @click="add">Add</button>
    </div>
  `
})

/**
 * actionsはUIイベントやAPIといった非同期処理で実行され、mutationsを呼び出すようにします。
 * ここではactionsに登録した'addMessage'関数によって、
 * 更新するタイプ(mutationsの'addMessage'を呼び出す)と、追加する配列要素をmutationsに渡しています。
 * stateに対する非同期処理(APIやsetTimeoutの遅延処理)やロジックをactionsに記述するのが良いです。
 * 
 * ```
 * actions: {
 *   [関数名]([第1引数:context], [第2引数:プリミティブ(数値, 文字列, 論理値[true/false])もしくは複数データで更新したい場合はオブジェクト]){
 *     // contextからmutationsの関数を呼び出し
 *   }
 * }
 * 
 * [例]
 * actions: {
 *   addMessage(context, v){
 *     context.commit('addMessage', v)
 *   }
 * }
 * ```
 * 
 * actionsでは呼び出すmutationsの関数だけでも良いですし、ユーザアクションから受け取った値を第2引数に渡してmutationsで受け取ることもできます。
 * 上記例では、コンポーネントから`this.$store.dispatch('addMessage', 'アイウエオ')`といったように実行できます。
 */