<template>
  <div id="wrapper">
    <Header class="header" />
    <div class="content">
      <!-- <router-view /> -->
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html, body{
  height: 100%;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
#wrapper{
  border: 15px solid #fff;
  background: rgb(80, 80, 80);
  box-sizing: border-box;
  height: 100%;
}
@media screen and (max-width: 768px){
  #wrapper{
    border: 15px solid rgb(80, 80, 80);
  }
}
.content{
  margin: 3% 0 8% 30%;
  padding: 15px;
  width: 70%;
  height: 89%;
  overflow-y: scroll;
  box-sizing: border-box;
  background: #fff;
}
@media screen and (max-width: 768px){
  .content{
    margin: 0;
    padding: 60px 10px 10px;
    width: 100%;
    height: 100%;
  }
}

h2{
  font-size: 24px;
  font-weight: bold;
}
.content-txt{
  margin: 20px 0 0;
}
.content-txt p{
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.4;
}

.header{
  position: fixed;
  top: 30px;
  left: 20px;
  z-index: 2;
}
@media screen and (max-width: 768px){
  .header{
    top: 20px;
    left: 5%;
    width: 90%;
    display: flex;
  }
}

.footer{
  position: fixed;
  bottom: 25px;
  left: 25px;
}

/* トランジション */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
