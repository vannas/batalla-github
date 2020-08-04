<template>
  <div id="app">
    <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="logo">
    <h2 red align-center>Bienvenido a GitHub Battle</h2>

    <div class="row">
      <usuario user="1"/>
      <usuario user="2"/>
    </div>

    <a class="waves-effect waves-light red" @click="compararPuntajes">Battle!</a>
  </div>
</template>

<script>
import usuario from './components/usuario.vue'

export default {
  name: 'App',
  components: {
    usuario
  },
  methods: {
    compararPuntajes(ev){
      ev.preventDefault();
      let player1=this.$store.state.jugadorA;
      let player2=this.$store.state.jugadorB;
        
      if (player1 > player2) {
        console.log(player1)
        alert(`El ganador es A.`)
      }
      else if (player1 < player2) {
        console.log(player2)
        alert(`El ganador es B.`)
      }
      else {
        alert(`Empataron!`)
      }     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom:50px;
}

img{
  max-width: 120px;
  margin-top:-60px;
}

h6{
  font-size:20px;
  color:crimson
}

h2{
  margin-top:-10px;
}

.row{
  position:relative;
  margin-left:10%;
}

.red, .orange{
    display:block;
    margin: 0 auto; 
    font-size:18px;    
    height:30px;
    padding-top:3px;
    width:130px;
    border:none;
    border-radius: 150px;
    color:white;
}

.red{
  height:40px;
  padding-top:5px;
  font-size:24px;
}

</style>
