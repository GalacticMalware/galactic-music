<template lang="pug">
  #app
   <!-- img(src="./assets/logo.png") -->
    GMHeader
    GMNotifcation(v-show="showNotification")
      p(slot="body") No se encontraron resultados
    GMLoader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
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
      .columns.is-multiline
        .column.is-one-quarter(v-for="t in tracks")
          GMTrack(
            :class="{ 'is-active' : t.id === selectedTrackID }",
            :track="t", 
            @select="setSelectedTrack") 
          <!--| {{t.title}} - {{t.artist.name}} -->

    GMFooter
            
</template>

<script>
import trackService from '@/services/track'
import GMFooter from '@/components/layout/Footer'
import GMHeader from '@/components/layout/Header'
import GMTrack from '@/components/Track.vue'
import GMLoader from '@/components/shared/Loader.vue'
import GMNotifcation from '@/components/shared/Notification.vue'

export default {
  components:{GMFooter,GMHeader,GMTrack,GMLoader,GMNotifcation},
  name: 'app',
  data () {
    return {
      searchQuery:'',
      tracks:[],
      searchMessage:'',
      isLoading:false,
      selectedTrackID:'',
      showNotification:false,
    }
  },
computed:{
     searchMessage(){
        return `Encontrado: ${this.tracks.length}`
     }
   },
  methods:{
   Search(){
     if(!this.searchQuery)return
     this.isLoading = true 
     trackService.search(this.searchQuery)
     .then(res =>{
       this.showNotification = res.data.length === 0
       this.isLoading = false
       this.tracks = res.data
       //this.searchMessage = this.tracks.length
       //console.log(res.data)
     }).catch(err =>{
       showNotification=true
     })
   },
   setSelectedTrack(id){
     this.selectedTrackID = id
   },
    
  }
  
   
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results{
    margin-top: 50px;
  }

  .is-active{
    border:3px #23d160 solid;
  }
</style>
