import Vue from 'vue'
import Router from 'vue-router'
import Socket from 'vue-socket.io'
import Page from '@/components/Page'
import Control from '@/components/Control'

Vue.use(Router)
Vue.use(Socket, 'http://192.168.0.37:8000')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },
    {
      path: '/control',
      name: 'Control',
      component: Control
    }
  ]
})
