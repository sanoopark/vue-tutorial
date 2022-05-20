import Vue from 'vue';
import VueRouter from 'vue-router';
import { NewsView, AskView, JobsView, UserView, ItemView } from '../views';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    },
    {
      path: '/item',
      component: ItemView,
    },
  ],
});

export default router;
