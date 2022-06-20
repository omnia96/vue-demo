import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/home.vue';
import BaseLayout from '../layouts/base.layout.vue';
import BlockLayout from '../layouts/block.layout.vue';
import BackLayout from '../layouts/back.layout.vue';
import {RuntimeEnv} from "../core/utils/runtime-env";
const routes = [
  {path: '', redirect: '/home'},
  {
    path: '',
    component: BaseLayout,
    name: 'base-layout',
    children: [
      {path: 'home', component: Home, name: 'home'},
      {path: 'about', component: () => import('../pages/about.vue'), name: 'about'},
    ]
  },
  {
    path: '',
    component: BlockLayout,
    name: 'block-layout',
    children: [
      {path: 'login', component: () => import('../pages/login.vue'), name: 'login'},
      {path: 'please-use-mobile', component: () => import('../pages/please-use-mobile.vue'), name: 'please-use-mobile', meta: {canNotMobile: true}},
    ],
  },
  {
    path: '',
    component: BackLayout,
    name: 'back-layout',
    children: [
      {path: 'user-info', component: () => import('../pages/user-info.vue'), name: 'user-info'},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (!(to.meta["canNotMobile"] ?? false) && !RuntimeEnv.isMobile()) {
    next('/please-use-mobile');
  }
  next();
});

export default router;
