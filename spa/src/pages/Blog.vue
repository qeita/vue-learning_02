<template>
  <section>
    <h2>Blog</h2>
    <div class="content-txt">
      <div class="input">
        <input type="text" ref="input" placeholder="ブログタイトルを入力">
        <button @click="addBlog">登録</button>
      </div>
      <div class="blog">
        <div class="blog-item" v-for="(item, i) in $store.state.blogArray" :key="i">
          <span>{{ item.date }}</span>
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
input{
  background: none;
  border: 1px solid #888;
  padding: 5px;
  width: 60%;
  margin: 0;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  line-height: 1.2;
  outline: none;
}
button{
  background: none;
  border: 5px solid #555;
  padding: 5px;
  margin: 0 0 0 30px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.2;
  outline: none;
}

.blog{
  margin: 20px 0 0;
}
.blog-item{
  background: #999;
  padding: 15px;
  margin: 0 0 15px;
  color: #fff;
}
.blog-item span{
  font-size: 16px;
}
.blog-item h3{
  margin: 10px 0 0;
  font-size: 24px;
  font-weight: bold;
}
</style>

<script>
export default {
  methods:{
    addBlog(){
      this.$store.dispatch('addBlog', this.$refs.input.value)
    }
  }
}
</script>
