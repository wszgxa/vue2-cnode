import Vue from 'vue'
import VueRouter from 'vue-router'
import index from 'components/content/index.vue'
Vue.use(VueRouter)

const routes = [].concat(
  [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ],
  )
const router = new VueRouter({
  routes
})

export default router
