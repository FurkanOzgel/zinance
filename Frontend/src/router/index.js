import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
      meta: { title: 'Zinance', requireAuth: 0 } 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { title: 'Giriş Yap | Zinance', requireAuth: -1 } // requireAuth setted as -1 because of block redirect
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: { title: 'Kayıt Ol | Zinance', requireAuth: -1 } // requireAuth setted as -1 because of block redirect
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { title: 'Dashboard | Zinance', requireAuth: 1 } 
    },
    {
      path: '/markets',
      name: 'markets',
      component: () => import('../views/MarketsView.vue'),
      meta: { title: 'Piyasalar | Zinance', requireAuth: 1 } 
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogsView.vue'),
      meta: { title: 'Bloglar | Zinance', requireAuth: 1 } 
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue'),
      meta: { title: 'Yardım | Zinance', requireAuth: 1 } 
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'Zinance'; // Değiştirilecek başlık

  await axios.get("http://127.0.0.1:8000/auth/user", {
    withCredentials: true
  })
  .then(response => { //Authenticated
    if(to.meta.requireAuth === 0){
      next('/dashboard')
    }else{
      next()
    }
  })
  .catch(error => { //Unauthenticated
    if(to.meta.requireAuth === 1){
      next('/')
    }else{
      next()
    }
  })

 
});

export default router
