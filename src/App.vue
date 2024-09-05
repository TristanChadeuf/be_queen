<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import  PageCatalogue from './views/Catalogue.vue'
import Footer from './components/Footer.vue'
import Accueil from './views/PageAccueil.vue'

export default{
  
    components:
    {
      Header,
      PageCatalogue,
      Footer,
      Accueil
    }
}
</script> 

<template>

  <Header />
  <router-view ></router-view > 
  <Footer />

  
</template>

<style>

</style>
