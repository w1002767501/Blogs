import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pages from '../views/pages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pages',
    name: 'pages',
    component: pages
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
