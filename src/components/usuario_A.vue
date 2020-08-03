<template>
<div class="container">
    <div class="row">
        <h2 red align-center>Bienvenido a GitHub Battle</h2>
        <div class="contenido">
            <div class="row">

                <div class="tabla yellow lighten-4">
                
                <p>Buscar: <input class="it" v-model='usuario' /><button class="red lighten-2" @click="cargarDatos">Buscar</button> </p>
                

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
</div>
</template>

<script>
export default {
    name: 'usuario_A',
    data() {
        return {
            usuario: "vannas" ,
            avatar: "",
            nombre: "",
            repositorio: 0,
            seguidores: 0,
            sigue: 0,
            gists: 0,
            Puntaje: 0
        }
    },
    methods: {
        cargarDatos() {
            this.axios.get(`https://api.github.com/users/${this.usuario}`)
            .then((datos) => {
                const usuario= datos.data;
                this.avatar=usuario.avatar_url;
                this.nombre=usuario.login;
                this.repositorio=usuario.public_repos;
                this.seguidores=usuario.followers;
                this.sigue=usuario.following;
                this.gists=usuario.public_gists;
                this.Puntaje=usuario.public_repos+usuario.public_gists+usuario.followers+usuario.following;
                console.log(usuario.avatar_url)
            })
        }
    },
    mounted() {
      this.cargarDatos();
    }
}
</script>

<style scoped>
.tabla{
  border:5px solid crimson;
  text-transform: capitalize;
  text-align: center;
  font-size: 16px;
  width:50%;
  margin:0 auto;
  margin-bottom:15px;
  padding-bottom:15px; 
}

.it{
    display:inline-block;
    background-color: white;
    text-align: center;
    width:40%;
}

.red{
    display:block;
    margin: 0 auto;
    font-size:14px;
    height:40px;
    width:150px;
    border:none;
    border-radius: 150px;
    color:white;
}

h6{
  font-size:20px;
  color:crimson
}
</style>