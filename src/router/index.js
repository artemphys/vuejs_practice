import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/Home.vue'
import ModalsView from '../views/Modals.vue'
import ReactionTimerView from '../views/reactionTimer/ReactionTimerView.vue'
import FormView from '../views/Form.vue'
import JobsView from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/timer',
      name: 'timer',
      component: ReactionTimerView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetails,
      props: true /*By adding props: true here we're passing the id as a props*/
    },
    /*redirect example*/
    {
      path: '/all-jobs',
      redirect: '/jobs'
    },
    /*Catchall 404 */
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/blog/Blog.vue')
    }
  ]
})

export default router
