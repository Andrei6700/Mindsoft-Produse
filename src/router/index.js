import { createRouter, createWebHistory } from 'vue-router'
import ProduseView from '../components/TabelaAndDelete/View.vue' 
import ProduseAdd from '../components/Add/Create.vue'
import produseEdit from '../components/Update/Edit.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'produse', 
      component: ProduseView
    },
    {
      path: '/produse/Add',
      name: 'produseAdd', 
      component: ProduseAdd
    },
    {
      path: '/produse/:id/edit',
      name: 'produseEdit', 
      component: produseEdit
    },

  ]
})

export default router
