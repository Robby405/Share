import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/Mainpage'
import Find from '../components/Find'
import Personal from '../components/Personal'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: MainPage
  }, {
    path: '/find',
    component: Find
  }, {
    path: '/personal',
    component: Personal
  },{
      path: '/login',
      component: Login
  }],
  linkActiveClass: 'active'
})