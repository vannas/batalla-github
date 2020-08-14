<template>
  <b-container>
    <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="logo" class="img">
    <h2>Bienvenido a GitHub Battle</h2>

    <b-row>
      <usuario user="1"/>
      <usuario user="2"/>
    </b-row>

    <b-row> <b-button variant="danger" class="btn" @click="compararPuntajes">Battle!</b-button></b-row>
  </b-container>
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
b-container {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  text-align: center;
  font-size:30px;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom:50px;
}

b-row .row{
  margin-right:10px;
}

img{
  max-width: 120px;
  margin:4px 43%;
}

h2, h5 {
  text-align:center;
}

h6{
  font-size:20px;
  color:crimson;
  text-align:center;
}

.btn {
  margin:30px auto;
}

</style>
