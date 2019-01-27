// コンポーネントを定義

// 孫コンポーネント
const Grandson = {
  mounted(){
    console.log(this.$store.state.message)
  },
  template: `
    <div>
      <p>Grandson: {{ $store.state.message }}</p>
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
      <p>Child: {{ $store.state.message }}</p>
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
      <p>Parent: {{ $store.state.message }}</p>
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
      <p>Mother: {{ $store.state.message }}</p>
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
      <p>GrandMother: {{ $store.state.message }}</p>
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
 * ここでは、コンポーネントが以下の構成になっています。
 * ルート > おばあちゃん > お母さん > 子 > 孫
 * 
 * これをVuexを使わずに表現するとしたら、ルートのdata(状態)に`message: 'お前の後ろだー'`をセットして、
 * propsで再帰的に受け渡していく必要があります。
 * 
 * Vuexのストアで管理することにより、各コンポーネントは直接状態コンテナであるストアを参照することができます。
 * 参照方法としては、`this.$store.state.[状態プロパティ名]`で取得できます(htmlでは'this.'は省略)。
 */