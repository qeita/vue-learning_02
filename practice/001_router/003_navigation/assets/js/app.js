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
  data(){
    return {
      userParam: ''
    }
  },
  methods: {
    goTo(url){
      this.$router.push(url)
    }
  },
  router,
  template: `
    <div class="content">
      <div>
        <label for="user">ユーザパラメータ</label>
        <input id="user" type="text" v-model="userParam">
      </div>

      <div class="section">
        <p>router-linkによる遷移</p>
        <nav>
          <router-link to="/foo">Go to Foo</router-link>
          <router-link to="/bar">Go to Bar</router-link>
          <router-link :to="'/user/' + userParam">Go to User</router-link>
        </nav>
      </div>

      <div class="section">
        <p>router.push(...)による遷移</p>
        <nav>
          <span @click="goTo('/foo')">Go to Foo</span>
          <span @click="goTo('/bar')">Go to Bar</span>
          <span @click="goTo('/user/' + userParam)">Go to User</span>
        </nav>
      </div>

      <router-view class="view"></router-view>
    </div>
  `
})

/**
 * [1]
 * ナビゲーション設定の1つとして、`router-link`タグを使用します。
 * 使用箇所はhtml側になります(上記ではtemplateプロパティによって出力されるhtmlに記載)。
 * 
 * `<router-link to="[遷移先]">[ラベル名]</router-link>`
 * 
 * と記述することで、htmlではaタグとして表示されます。
 * to="(遷移先)"の遷移先を動的に変えたい場合、属性値の動的変更に使用した`v-bind:`(':'でも)が使えます。
 * 
 * また、ルーティングとマッチした際、`router-link-active`クラスが付与されるため、
 * カレント表示(今見ているコンテンツのナビゲーションに色つける・下線をつける)する際に使えます。
 * ※ただしto="/"のrouter-linkリンクを追加すると、'/foo'や'/bar'に遷移しても'/'に対してカレント設定がされます。
 *  `router-link-active`は包括的なマッチングになっているため、厳密なマッチングを行うにはそのリンクに対して`exact`属性を付与する必要があります。
 */

/**
 * [2]
 * ナビゲーション設定にはもう1つ、`router.push(...)`でも設定できます。
 * ルートVueインスタンスに注入したことにより、コンポーネント内では`this.$router.push(...)`(htmlでは'this.'を省略)で呼び出すことができます。
 * 上記コードでは、クリックするとメソッド経由で`this.$router.push(...)`を実行。
 * 
 * `router-link`と違って、`router-link-active`クラスは付与されません。
 */

/**
 * [3]
 * Vue RouterはHistory APIに影響を受けており、上記のナビゲーションはブラウザバックすると繊維前の画面に戻るようになっています。
 * これは、HistoryスタックにHistoryエントリが追加されることによって実現されます(イメージとして履歴を保持している?)
 * 
 * ただ、前の画面に戻したくないケースも場合によってあり(ユースケース上ブラウザバックで戻したくない、ブラウザバックで前に戻ることで予期せぬ動きが出るetc)、
 * その場合は以下のように`replace`を付与したり`replace`に置き換えたりします。
 * 
 * 【router-linkの場合】
 * `<router-link to="[遷移先]" replace>[ラベル名]</router-link>`
 * 
 * 【router.push(...)の場合】
 * `this.$router.replace("[遷移先]")`
 */