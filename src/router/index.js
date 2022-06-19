import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/home.vue';
const routes = [
  {path: '/', required: '/home'},
  {path: '/home', component: Home},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
