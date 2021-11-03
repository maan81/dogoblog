import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeComputed from '../views/HomeComputed.vue'
import HomeComposition from '../views/HomeComposition.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home-computed',
    name: 'HomeComputed',
    component: HomeComputed
  },
  {
    path: '/home-composition',
    name: 'HomeComposition',
    component: HomeComposition
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details//,
    // props: true // not using id
  },
  {
    path: '/create',
    name: 'Create',
    component: Create//,
    //props: true
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag//,
    //props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
