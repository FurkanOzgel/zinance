import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
      meta: { title: 'Zinance' } 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { title: 'Giriş Yap | Zinance' } 
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: { title: 'Kayıt Ol | Zinance' } 
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { title: 'Dashboard | Zinance' } 
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Zinance'; // Değiştirilecek başlık
  next();
});

export default router
