import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    redirect: "/mall/home",
    component: Home
  },
  {
    path: '/mall/home',
    name: 'MallHome',
    component: () => import( /* webpackChunkName: "mallHome" */ '../views/mall/home/home.vue')
  },
  {
    path: '/mall/store',
    name: 'MallStore',
    component: () => import( /* webpackChunkName: "mallStore" */ '../views/mall/store/store.vue')
  },
  {
    path: '/promotion/fast-buy',
    name: 'FastBuy',
    component: () => import( /* webpackChunkName: "fastBuy" */ '../views/promotion/fast-buy.vue')
  },
  {
    path: '/live/home',
    name: 'LiveHome',
    component: () => import( /* webpackChunkName: "liveHome" */ '../views/live/home/home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router