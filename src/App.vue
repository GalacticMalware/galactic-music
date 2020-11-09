<template lang="pug">
  #app
   <!-- img(src="./assets/logo.png") -->
    section.section
      nav.navbar.has-shadow
        .container.results
          input.input.is-large(type="text", 
            placeholder="Buscar canciones",
            v-model="searchQuery")
          a.button.is-info.is-large(@click="Search") Buscar
          a.button.is-danger.is-large &times;
        
    .container
      p
        small {{searchMessage}}
         

    .container.results
      .columns
        .column(v-for="t in tracks") 
          | {{t.title}} - {{t.artist.name}}
            
</template>

<script>
import trackService from './services/track'

export default {
  name: 'app',
  data () {
    return {
      searchQuery:'',
      tracks:[],
      searchMessage:''
    }
  },
  methods:{
   Search(){
     if(!this.searchQuery)return 
     trackService.search(this.searchQuery)
     .then(res =>{
       this.tracks = res.data
       this.searchMessage = this.tracks.length
       console.log(res.data)
     })
   },
   computed:{
     searchMessage(){
        return `Encontrado: ${this.tracks.length}`
     }
   }
    
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results{
    margin-top: 50px;
  }
</style>
