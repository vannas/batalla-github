<template>
    
    <b-container class="tabla">
        <b-row>               
            <b-form-input state="false" v-model="usuario" placeholder="Usuario"></b-form-input>
        </b-row>
        <b-row>
            <b-button variant="danger" size="sm" class="btn" @click="cargarDatos">Buscar:</b-button> 
        </b-row>

        <b-row><b-icon icon="person-circle" class="idiot"></b-icon> Usuario: {{usuario}}</b-row>
        <b-row><b-icon icon="folder-fill" class="idiot"></b-icon> Repositorios: {{repositorio}} </b-row>
        <b-row><b-icon icon="people-fill" class="idiot"></b-icon>Seguidores: {{seguidores}} </b-row>
        <b-row><b-icon icon="arrow-up-right-circle-fill" class="idiot"></b-icon>Siguiendo: {{sigue}} </b-row>
        <b-row><b-icon icon="patch-check-fll" class="idiot"></b-icon>Gists Públicos: {{gists}} </b-row>
            
        <b-row><h5 class="fin">Puntaje Total: {{Puntaje}}</h5></b-row>
        <b-row></b-row>
        <b-row class="img_gallery">
            <img v-for="(seguidor, i) in lista_gente" :key="i" :src="seguidor.avatar_url" alt="">
        </b-row>
    
    </b-container>

    
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
  display:block;
  width:30%;
  border:2px solid #c62828;
  text-align: center;
  padding: 20px 50px 10px 50px;
  margin-top:20px;
}

.idiot{
    display:inline-block;
    font-size:1.6em;
    margin:10px 10px;
    text-align: center;
}

.btn {
    margin: 8px auto;
}
.img_gallery img{    
    margin:5px;
    padding:2px;
    max-width: 50px;
}

.fin{
    font-size: 18px;
    font-weight:bold;
    color: #c62828;
    margin-left:120px;
}
</style>