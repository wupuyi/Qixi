import Vue from 'vue'
import Router from 'vue-router'
import Qixi from '@/components/Qixi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Qixi',
      component: Qixi
    }
  ]
})
