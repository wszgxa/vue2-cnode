import Vue from 'vue'
import VueRouter from 'vue-router'
import index from 'components/content/index.vue'
import sidebar from 'components/sidebar/sidebar.vue'
Vue.use(VueRouter)

const routes = [].concat(
  [
    {
      path: '/',
      name: 'index',
      components: {
        default: index,
        sidebar: sidebar
      }
    }
  ],
  )
const router = new VueRouter({
  routes
})

export default router
