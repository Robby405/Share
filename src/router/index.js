import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/Mainpage'
import Find from '../components/Find'
import Personal from '../components/Personal'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

export default new Router({
  mode: "history",
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
  },{
      path: '/register',
      component: Register
  }],
  linkActiveClass: 'active',
  // eslint-disable-next-line
  scrollBehavior (to, from ,savedPosition) {
    return {x:0,y:0} 
  }
})