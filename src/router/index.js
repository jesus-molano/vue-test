import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '@/views/CounterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue') // importación dinámica
    }
  ]
})

export default router
