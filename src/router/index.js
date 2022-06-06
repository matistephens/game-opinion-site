import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: () => import('@/views/OpinionesView.vue')
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: () => import('@/views/AdministracionView.vue')
  },
  {
    path: '/administracion/editar/:id',
    name: 'editar',
    component: () => import('@/views/EditarView.vue')
  },
  {
    path: '/*',
    name: 'pageNotFound',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
