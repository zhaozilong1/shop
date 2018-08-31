import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/main.vue'
import subNav from '@/components/subNav/subNav.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/subNav/:id',
      name: 'subNav',
      component: subNav
    }
  ]
})
