import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/PageAccueil.vue'
import Catalogue from '../views/CatalogueView.vue'
import Personnalisation from '../components/Personnalisation.vue'
import Description from '../components/description.vue'

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
    {
      path:'/Personnalisation',
      name:'Personnalisation',
      component: Personnalisation
    },
    {
      path:'/Description/:id',
      name:'Description',
      component: Description
    },
  ]
})

export default router
