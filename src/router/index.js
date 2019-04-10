import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/Mainpage'
import Find from '../components/Find'
import Personal from '../components/Personal'
import Login from '../components/Login'
import Register from '../components/Register'
import Profile from '../components/personal/Profile'
import Share from '../components/personal/Share'
import Like from '../components/personal/Like'
import Comment from '../components/personal/Comment'
import Follow from '../components/personal/Follow'
import Edit from '../components/Edit'
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
    component: Personal,
    children: [{
      path: 'profile',
      component: Profile
    },
    {
      path: 'shares',
      component: Share
    },{
      path: 'likes',
      component: Like
    },
    {
      path: 'comments',
      component: Comment
    },{
      path: 'follows',
      component: Follow
    }]
  },{
      path: '/login',
      component: Login
  },{
      path: '/register',
      component: Register
  },{
    path: '/edit',
    component: Edit
  }],
  linkActiveClass: 'active',
  // eslint-disable-next-line
  scrollBehavior (to, from ,savedPosition) {
    return {x:0,y:0} 
  }
})