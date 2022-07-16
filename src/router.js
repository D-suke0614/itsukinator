import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/itsuki-home'
import Nickname from './components/pages/itsuki-nickname'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/nickname',
    name: 'nickname',
    component: Nickname
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
