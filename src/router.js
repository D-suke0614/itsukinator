import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/itsuki-home'
import Nickname from './components/pages/itsuki-nickname'
import SelectCategory from './components/pages/itsuki-select-category'
import SelectContent from './components/pages/itsuki-select-content'
import Result from './components/pages/itsuki-result'

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
    component: Nickname,
  },
  {
    path: '/select',
    name: 'select-category',
    component: SelectCategory,
  },
  {
    path: '/select/content',
    name: 'select-content',
    component: SelectContent,
  },
  {
    path: '/result',
    name: 'result',
    component: Result,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
