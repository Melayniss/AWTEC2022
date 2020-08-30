import Vue from 'vue'
import Router from 'vue-router'
import PageView from "../view/PageView";
import Contact_us from "../view/ContactUs";
import HomePage from "../view/HomePage";
import Committee from "../view/Committee";
import Committee_local from "../view/Committee_local";
import Committee_board from "../view/Committee_board";
import Routine from "../view/Routine";
import Speaker from "../view/Speaker";
import Preparation from "../view/Preparation";
import Accommodation from "../view/Accommodation";
import Route from "../view/Route";
import FAQ from "../view/FAQ";
import Sponsorship from "../view/Sponsorship";
import Login from "../view/Login";

// const Committee = () => import("../view/Committee")
// const Committee_local = () => import("../view/Committee_local")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'Home',
          component: HomePage,
          meta: {
            title: 'Home'
          }
        },
        {
          path: '/committee',
          name: 'Committee',
          component: Committee,
          meta: {
            title: 'Committee'
          },
          children: [
            {
              path: '/committee',
              redirect: '/committee/local'
            },
            {
              path: '/committee/local',
              name: 'Committee_local',
              component: Committee_local,
              meta: {
                title: 'Local Committee'
              }
            },
            {
              path: '/committee/board',
              name: 'Committee_board',
              component: Committee_board,
              meta: {
                title: 'Board or Other Committees'
              }
            }
          ]
        },
        {
          path: '/routine',
          name: 'Routine',
          component: Routine,
          meta: {
            title: 'Routine'
          }
        },
        {
          path: '/speaker',
          name: 'Speaker',
          component: Speaker,
          meta: {
            title: 'Speaker'
          }
        },
        {
          path: '/preparation',
          name: 'Preparation',
          component: Preparation,
          children: [
            {
              path: '/preparation/accommodation',
              name: 'Accommodation',
              component: Accommodation,
              meta: {
                title: 'Accommodation'
              }
            },
            {
              path: '/preparation/route',
              name: 'Route',
              component: Route,
              meta: {
                title: 'Route'
              }
            },
            {
              path: '/preparation/faq',
              name: 'FAQ',
              component: FAQ,
              meta: {
                title: 'FAQ'
              }
            },
            {
              path: '/preparation/contact',
              name: 'Contact_us',
              component: Contact_us,
              meta: {
                title: 'Contact Us'
              },
            },
          ]
        },
        {
          path: '/sponsorship',
          name: 'Sponsorship',
          component: Sponsorship,
          meta: {
            title: 'Sponsorship'
          }
        },
        // {
        //   path: '/login',
        //   name: 'Log in',
        //   component: Login,
        //   meta: {
        //     title: 'Log in'
        //   }
        // },
        // Wait to fulfill this part
      ]
    }
  ]
})
