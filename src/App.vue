<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import  PageCatalogue from './views/Catalogue.vue'
import Footer from './components/Footer.vue'
import Accueil from './views/PageAccueil.vue'
import axios from 'axios';
 axios("http://127.0.0.1:8000/api/product")

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
  <router-view></router-view> 
  <Footer />

  
</template>

<style>

</style>
