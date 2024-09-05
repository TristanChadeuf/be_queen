import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/PageAccueil.vue'
import Catalogue from '../views/Catalogue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path:'/catalogue',
      name:'Catalogue',
      component: Catalogue
    },
    
  ]
})

export default router
