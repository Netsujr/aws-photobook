import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import AlbumView from '../views/AlbumView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/albums',
    name: 'AlbumsView',
    component: AlbumsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/albums/:id',
    name: 'AlbumView',
    component: AlbumView,
    meta: { requiresAuth: true }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
