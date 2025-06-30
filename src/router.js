import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachDetail from './pages/coaches/CoachDetail.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RegisterCoach from './pages/coaches/CoachRegistration.vue';
import RequestList from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [
        { path: 'contact', component: ContactCoach }
      ],
    },
    { path: '/register', component: RegisterCoach },
    { path: '/requests', component: RequestList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
