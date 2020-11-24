import Vue from 'vue'
import VueRouter from 'vue-router'
import LastArticles from '../components/LastArticlesComponent.vue';
//import HelloWorld from '../components/HelloWorld.vue';
import Blog from '../views/Blog.vue';
import Form from '../views/Form.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Page from '../views/Page.vue';
import Movies from '../views/Movies.vue';
import ErrorComponent from '../components/ErrorComponent.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LastArticles
  },
  {
    path: '/home',
    name: 'Home',
    component: LastArticles
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/page/:id?',
    name: 'page',
    component: Page
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/movies',
    name: 'Movie',
    component: Movies
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    name: 'Error',
    component: ErrorComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
