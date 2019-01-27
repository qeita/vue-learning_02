<template>
  <header>
    <div class="logo">
      <h1>Vue Practice</h1>
    </div>

    <Nav />
  </header>
</template>

<style>
.logo{
  margin: 0 0 30px;
}
@media screen and (max-width: 768px){
  .logo{
    margin: 0;
  }
}
h1{
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #fff;
}
h1 img{
  width: 100px;
}
@media screen and (max-width: 768px){
  h1{
    font-size: 18px;
    color: #000;
  }
  h1 img{
    width: 40%;
  }
}
</style>

<script>
import Nav from './Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>
