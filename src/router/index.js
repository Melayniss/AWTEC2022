import Vue from 'vue'
import Router from 'vue-router'
import Us from "../view/Us";
import HomePage from "../view/HomePage";
import Committee from "../view/Committee";
import Local from "../view/CommitteeLocal";
import Board from "../view/CommitteeBoard";
import Routine from "../view/Routine";
import Speaker from "../view/Speaker";
import Preparation from "../view/Preparation";
import Accommodation from "../view/Accommodation";
import Transportation from "../view/Transportation";
import Tours from "../view/Tours";
import Sponsorship from "../view/Sponsorship";
import Dates from "../view/KeyDates";
import Programs from "../view/Programs";
// import Login from "../view/Login";

// Other writing way
// const Committee = () => import("../view/Committee")

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    // name: '',
    component: HomePage,
    meta: {
      title: 'AWTEC 2022: 6th Asian Wave and Tidal Energy Conference'
    }
  },
  {
    path: '/committee',
    // name: '',
    component: Committee,
    meta: {
      title: 'AWTEC 2022: Committees'
    },
    children: [
      {
        path: '',
        redirect: 'local'
      },
      {
        path: 'local',
        // name: '',
        component: Local,
        meta: {
          title: 'AWTEC 2022: Local Committees'
        },
      },
      {
        path: 'board',
        // name: '',
        component: Board,
        title: 'AWTEC 2022: Board and Other Committees'
      }
    ]
  },
  {
    path: '/routine',
    // name: '',
    component: Routine,
    meta: {
      title: 'AWTEC 2022: Conference Routine'
    },
    children: [
      {
        path: '',
        redirect: 'dates'
      },
      {
        path: 'dates',
        component: Dates,
        meta: {
          title: 'AWTEC 2022: Key Dates About the 6th AWTEC Conference'
        }
      },
      {
        path: 'programs',
        component: Programs,
        meta: {
          title: 'AWTEC 2022: Tentative Programs in the 6th AWTEC Conference'
        }
      }
    ]
  },
  {
    path: '/speaker',
    // name: '',
    component: Speaker,
    meta: {
      title: 'AWTEC 2022: Speakers committed'
    }
  },
  {
    path: '/preparation',
    // name: '',
    component: Preparation,
    //release version 1.0.0 need to separate this part
    meta: {
      title: 'AWTEC 2022: Preparations Needed'
    },
    // children: [
    //   {
    //     path: 'accommodation',
    //     name: 'accommodation',
    //     component: Accommodation,
    //     meta: {
    //       title: 'AWTEC 2022: Official Accommodation'
    //     }
    //   },
    //   {
    //     path: 'transportation',
    //     name: 'transportation',
    //     component: Transportation,
    //     meta: {
    //       title: 'AWTEC 2022: The Transportation towards Destination'
    //     }
    //   },
    //   {
    //     path: 'tours',
    //     component: Tours,
    //     meta: {
    //       title: 'AWTEC 2022: FAQs'
    //     }
    //   },
    //   {
    //     path: 'contact',
    //     name: 'contact',
    //     component: Us,
    //     meta: {
    //       title: 'AWTEC 2022: Contact Us in the Ways below'
    //     }
    //   }
    // ]
  },
  {
    path: '/accommodation',
    name: 'accommodation',
    component: Accommodation,
    meta: {
      title: 'AWTEC 2022: Official Accommodation'
    }
  },
  {
    path: '/transportation',
    name: 'transportation',
    component: Transportation,
    meta: {
      title: 'AWTEC 2022: The Transportation towards Destination'
    }
  },
  {
    path: '/tours',
    component: Tours,
    meta: {
      title: 'AWTEC 2022: FAQs'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Us,
    meta: {
      title: 'AWTEC 2022: Contact Us in the Ways below'
    }
  },
  {
    path: '/sponsorship',
    component: Sponsorship,
    meta: {
      title: 'AWTEC 2022: Be Grateful for Our Sponsors'
    }
  },
  // {
  //   path: 'login',
  // }
]

export default new Router({
  routes: routes,
  mode: 'history',
  // base: '/awtec-admin/'
})
