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

/**
 * ルーティング設定で`props: true`を設定したことで、
 * パラメータの'userId'をpropsとして受け取ることができます。
 */
const User = {
  props: ['userId'],
  template: `
    <div>
      <p>User {{ userId }}</p>
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
  // パスの設定で props を有効にするのに、`props: true`を追加
  { path: '/user/:userId', component: User, props: true },
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