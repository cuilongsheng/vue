<template>
  <div id="app">
    <container-all></container-all>
  </div>
</template>

<script>
import containerAll from './components/common/container-all'
export default {
  name: 'App',
  components:{
    containerAll,
  }
}
</script>

<style>
html,body,p,ul,li,ol,h1,h2,h3,h4,h5,h6,div{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #1a3d5fe1;
  /* margin-top: 60px; */
}
.router-link,a{
  text-decoration: none;
  color:#fff;
}
</style>
