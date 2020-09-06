import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Index.vue')
const Notice = () => import('../views/Notice/Index.vue')
const Project = () => import('../views/Project/Index.vue')
const Me = () => import('../views/Me/Index.vue')
const File = () => import('../views/File/Index.vue')
const Task = () => import('../views/Project/children/Task.vue')
const ProjectHome = () => import('../views/Project/children/Home.vue')
const TaskDetail = () => import('../views/Project/children/Detail.vue')
const Login = () => import('../views/Login/Index.vue')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/project',
  children: [{
      path: '/notice',
      name: 'Notice',
      component: Notice,
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      children: [{
          path: '/task',
          name: 'Task',
          component: Task,
        },
        {
          path: '/project',
          name: 'ProjectHome',
          component: ProjectHome,
        },

      ]
    },
    {
      path: '/project/:id',
      name: 'TaskDetail',
      component: TaskDetail,
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
}, {
  path: '/login',
  name: 'Login',
  component: Login
}]

const router = new VueRouter({
  routes
})

export default router