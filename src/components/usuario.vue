<template>
    
    <div class="tabla yellow lighten-3 col s4 m4 offset-m1">
        <p>Buscar: <input class="it" v-model='usuario' /><a class="waves-effect waves-light orange" @click="cargarDatos">Buscar</a> </p>

        <p><i class="material-icons">account_circle</i> Usuario: {{usuario}}</p>
        <p><i class="material-icons">next_week</i> Repositorios: {{repositorio}}</p>
        <p><i class="material-icons">face</i> Seguidores: {{seguidores}}</p>
        <p><i class="material-icons">directions_run</i> Siguiendo: {{sigue}}</p>
        <p> <i class="material-icons">device_hub</i> Gists Públicos: {{gists}}</p>
        
        <h5 class="fin">Puntaje Total: {{Puntaje}}</h5>               

        <div class="img_gallery">
            <img v-for="(seguidor, i) in lista_gente" :key="i" :src="seguidor.avatar_url" alt="">
        </div>
    </div>

    
</template>

<script>
export default {
    name: 'usuario',
    data() {
        return {
            usuario: "" ,
            avatar: "",
            nombre: "",
            repositorio: 0,
            seguidores: 0,
            sigue: 0,
            gists: 0,
            Puntaje: 0,
            lista_gente: []
        }
    },
    props: {
    user: String
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
                
                if(this.user == "1"){
                    this.$store.commit('updatePuntaje1', this.Puntaje)
                }
                else {
                    this.$store.commit('updatePuntaje2', this.Puntaje)
                }
            })
            .catch(error => {
                alert(`Houston, tenemos un problema. ${error}`)
            });

            this.axios.get(`https://api.github.com/users/${this.usuario}/followers`)
            .then((datos) => {
                const followers=datos.data;
                console.log(followers)
                this.lista_gente=followers;
            })
            
        }   
    }
}
</script>

<style scoped>

.tabla{
  display:inline-block;
  border:2px solid #c62828;
  text-align: center;
  font-size: 20px;
  margin-bottom:15px;
  padding-bottom:10px; 
  margin-top:-10px;
}

.it{
    display:inline-block;
    background-color: white;
    text-align: center;
    width:50%;
}
.img_gallery img{
    display:inline-block;
    margin:5px;
    padding:2px;
    max-width: 50px;
}

.fin{
    font-size: 24px;
    color: #c62828;
}
</style>