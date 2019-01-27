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
      state.message.push(v)
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
      const v = this.$store.state.message[ this.$store.getters.getMessageCount - 1 ] === 'お前の後ろだー'? 'フェニックスが抱きついているよ': 'お前の後ろだー'
      this.$store.commit('addMessage', v)
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
 * mutationsは直接stateを更新できる役割を持っています。
 * ここではmutationsに登録した'addMessage'関数によって、`this.$store.state.message`の配列要素を追加しています。
 * 
 * ```
 * mutations: {
 *   [関数名]([第1引数:state], [第2引数:プリミティブ(数値, 文字列, 論理値[true/false])もしくは複数データで更新したい場合はオブジェクト]){
 *     // stateの更新処理を記述
 *   }
 * }
 * 
 * [例]
 * mutations: {
 *   addMessage(state, v){
 *     state.message.push(v)
 *   }
 * }
 * ```
 * 
 * 上記例では、コンポーネントから`this.$store.commit('addMessage', 'アイウエオ')`といったように実行できます。
 */