// コンポーネントを定義
const Foo = {
  template: `
    <div>
      <p>[Foo] コンテンツ</p>
    </div>
  `
}

const Bar = {
  template: `
    <div>
      <p>[Bar] コンテンツ</p>
    </div>
  `
}

const User = {
  mounted(){
    console.log(this.$route)
  },
  // URL変更を検知(1) - ウォッチャ
  // watch: {
  //   '$route'(to, from){
  //     console.log(from)
  //     console.log(to)
  //   }
  // },
  
  // URL変更を検知(2) - ナビゲーションガード
  // beforeRouteUpdate(to, from, next){
  //   console.log(from)
  //   console.log(to)
  //   // next()を実行しないと、
  //   // templateの'{{ $route.params.userId }}'更新が反映されません。
  //   // next() 
  // },

  template: `
    <div>
      <p>User {{ $route.params.userId }}</p>
    </div>
  `
}

/**
 * 1. パスとそれに対応して描画するコンポーネントをペアで指定
 *    Routerインスタンスを作成、routesキーに追加
 */
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },

  // ':'が付与されると、動的なパラメータをカバーすることができます('v-bind:' or ':'みたいな？)
  // '/user/12345'や'/user/aiueo'等のURLに遷移すると、Userコンポーネントが呼び出されます
  { path: '/user/:userId', component: User },
]

const router = new VueRouter({
  routes    // routes: routes
})

/**
 * 2. ルートVueインスタンスで作成したインスタンスをオプションに追加
 *    設定されたルーティングは、router-viewコンポーネント内で描画されます
 */
new Vue({
  el: '#app',
  router,
  template: `
    <div class="content">
      <nav>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-link to="/user/aaaa">Go to User</router-link>
      </nav>

      <router-view class="view"></router-view>
    </div>
  `
})

/**
 * [1]
 * Userコンポーネントにmountedイベントをフックして、`this.$route`をコンソールログで出力するようにしました。
 * すると、動的セグメント(上記でいうと`:userId`)部分を例えば'Bill'に変えて(つまり、URLを'/user/Bill')リロードすると、以下のようなログが出てきます。
 * 
 * { name: undefined, params: {userId: "Bill"}, path: "/user/Bill", query: {}, ... }
 * 
 * これより、`params`プロパティには { [動的セグメント名]: [対応する値] } という形式で保持されます。
 * なお、末尾に?付きでパラメータ(例: URLを'/user/Bill?sex=man&age=38')で渡すと、以下のように`query`プロパティにパラメータ情報が出力されます。
 * 
 * { name: undefined, params: {userId: "Bill"}, path: "/user/Bill", query: {sex: "man", age: "38"}, ... }
 * 
 * つまり、Userコンポーネント側で
 * `{{ $route.params.userId }}`
 * は、上述の`this.$route`の出力結果から特定情報(userIdに相当する値)を抽出・表示しています。
 */

/**
 * [2]
 * Userコンポーネントのような動的URLにおいて、URLを検知する方法として2通りあります。
 * - ウォッチャ(watch)で、'$route'を監視
 * - 'beforeRouteUpdate'を使用
 * どちらもUserコンポーネント内でコメントアウトされているので、コメントを外して確認してみてください。
 */