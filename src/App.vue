<template>
  <div id="app">
    <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="logo">
    <batalla />
  </div>
</template>

<script>
import batalla from './components/batalla.vue'

export default {
  name: 'App',
  components: {
    batalla
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  max-width: 120px;
  margin-top:-40px;
  margin-bottom: -30px;
}
</style>
