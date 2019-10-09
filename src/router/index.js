import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/categories/:category',
      name: 'categories',
      component: Categories
    }
  ]
})
