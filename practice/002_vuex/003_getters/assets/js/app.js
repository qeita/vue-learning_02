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
    message: 'お前の後ろだー'
  },
  getters: {
    // state.messageを返す
    getMessage(state){
      return state.message
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
  template: `
    <div>
      <GrandMother />
    </div>
  `
})

/**
 * state参照で`this.$store.state.message`という書き方でもいけますが、
 * 参照専用のgettersによって呼び出すこともできます(参照はgettersで行うという決めでいくと、$store.stateや$store.gettersが混在することがなく見通しが良くなります)。
 * 
 * gettersに参照用の関数を定義し、その中でstate内の特定のプロパティをreturnで返すようにします。
 * なお、gettersの関数は第1引数がstate, 第2引数はgettersになります。
 * (第2引数は他のgettersによる関数を参照して計算する際に使用)
 * 
 * ```
 * getters: {
 *   [関数名]([第1引数: state], [第2引数: getters]){
 *     // 結果をreturnで返す
 *   }
 * }
 * 
 * [例]
 * getters: {
 *   getMessage(state){
 *     return state.message
 *   }
 * }
 * ```
 * gettersの関数は、`this.$store.getters.getMessage`のようにして呼び出せます。
 */