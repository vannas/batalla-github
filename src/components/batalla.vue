<template>
  <div class="hello">
    <h2 red align-center>Bienvenido a GitHub Battle</h2>
    <div class="contenido">
      <div class="row">

        <div class="tabla yellow lighten-4">
          <p>Usuario: {{usuario}}</p>
          <p>Repositorios: {{repositorio}}</p>
          <p>Seguidores: {{seguidores}}</p>
          <p>Siguiendo: {{sigue}}</p>
          <p>Gists Públicos: {{gists}}</p>
          
          <h6>Puntaje Total: {{Puntaje}}</h6>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'batalla',
  data() {
    return {
      usuario: "" ,
      repositorio: 0,
      seguidores: 0,
      sigue: 0,
      gists: 0,
      Puntaje: 0
    }
  },  
  mounted() {
    this.axios.get('https://api.github.com/users/vannas')
      .then(datos => {
        const yo=datos.data
        console.log(yo);
        this.usuario=yo.login;
        this.repositorio=yo.public_repos;
        this.seguidores=yo.followers;
        this.sigue=yo.following;
        this.gists=yo.public_gists;
        this.Puntaje=yo.login.length + yo.public_repos + yo.followers + yo.followers + yo.public_gists;
      })
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tabla{
  border:5px solid crimson;
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  width:50%;
  margin:0 auto;
  margin-bottom:15px;
  padding-bottom:15px;
}

h6{
  font-size:24px;
  color:crimson
}
</style>
