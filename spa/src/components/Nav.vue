<template>
  <nav>
    <ul>
      <li>
        <!-- <router-link class="link" to="/">Home</router-link> -->
      </li>
      <li>
        <!-- <router-link class="link" to="/about">About</router-link> -->
      </li>
    </ul>
  </nav>
</template>

<style>
li{
  margin: 15px 0;
}
@media screen and (max-width: 768px){
  ul{
    margin: 0 0 0 20px;
    display: flex;
  }
  li{
    margin: 0 10px;
  }
}
.link{
  position: relative;
  display: inline-block;
  padding: 0 6px;
  text-decoration: none;
  font-size: 20px;
  line-height: 1;
  color: #fff;
  transition: 0.2s all ease-out;
}
.link:before{
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #fff;
  content: '';
  z-index: -1;
  transition: 0.2s all ease-out;
}
.link:hover{
  color: #000;
}
.link:hover:before{
  width: 100%;
}
@media screen and (max-width: 768px){
  .link{
    font-size: 12px;
    color: #000;
  }
}

.router-link-exact-active{
  color: #000;
}
.router-link-exact-active:before{
  width: 100%;
}
@media screen and (max-width: 768px){
  .router-link-exact-active{
    text-decoration: underline;
  }
}
</style>

<script>
export default {
}
</script>
