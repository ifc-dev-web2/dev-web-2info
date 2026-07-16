import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AvaliacaoView from '../views/AvaliacaoView.vue'
import RankingView from '../views/RankingView.vue'
import CoffeeDetails from '@/views/CoffeeDetails.vue'

const routes = [
 {
      path: '/',
      name: 'home',
      component: HomeView,
       meta: { title: 'SCA Café Brazil - Início' }
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: AvaliacaoView,
       meta: { title: 'SCA Café Brazil - Avaliação' }
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView,
       meta: { title: 'SCA Café Brazil - Ranking' }
    },
    {
      path: '/cafe/:id',
       name: 'cafe-details',
      component: CoffeeDetails
    },
    // Rota coringa (404) - Opcional
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Página não encontrada' }
  }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll behavior (voltar ao topo ao mudar de rota)
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Campeonato SCA'
  next()
})

export default router