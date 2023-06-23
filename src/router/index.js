import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '../views/IntroductionView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: IntroductionView,
      meta: { title: 'Zinance' } 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { title: 'Giriş Yap | Zinance' } 
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Zinance'; // Değiştirilecek başlık
  next();
});

export default router
