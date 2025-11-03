import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../views/Home.vue';
import MultiplicationTable from '../../views/MultiplicationTable.vue';
import AboutMe from '../../views/AboutMe.vue';
import Allitems from '../../views/portfolio/Allitems.vue'
import PortfolioItemDetails from '../../views/portfolio/PortfolioItemDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/multiplication-table',
      name: 'MultiplicationTable',
      component: MultiplicationTable
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    },

    {
      path: '/examples/portfolio/',
      children: [
        {
          path: '',
          name: 'PortfolioLandingPage',
          component: Allitems
        },
        {
          path: ':portfolioId',
          name: 'PortfolioItemDetails',
          component: PortfolioItemDetails
        }
      ]
    }
  ]
});

export default router;
