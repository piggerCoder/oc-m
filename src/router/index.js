import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Index.vue')
const Notice = () => import('../views/Notice/Index.vue')
const Project = () => import('../views/Project/Index.vue')
const Me = () => import('../views/Me/Index.vue')
const File = () => import('../views/File/Index.vue')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/project',
  children: [
    {
      path: '/notice',
      name: 'Notice',
      component: Notice,
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
    },
    {
      path: '/file',
      name: 'File',
      component: File,
    }
  ]
}, ]

const router = new VueRouter({
  routes
})

export default router