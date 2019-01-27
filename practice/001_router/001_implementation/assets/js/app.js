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
 * 1. パスとそれに対応して描画するコンポーネントをペアで指定
 *    Routerインスタンスを作成、routesキーに追加
 */
const routes = [
  // '/foo'のURLに遷移すると、Fooコンポーネントが呼び出されます
  // { path: '/foo', component: Foo },
  // '/bar'のURLに遷移すると、Barコンポーネントが呼び出されます
  // { path: '/bar', component: Bar },
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
      </nav>

      <router-view class="view"></router-view>
    </div>
  `
})