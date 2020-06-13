import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
// import VoteIndex from '@/pages/vote/VoteIndex'
// import VoteList from '@/pages/vote/VoteList'
// import VoteDetail from '@/pages/vote/VoteDetail'
// import Loading from '@/pages/hackthon/Loading'
// import Score from '@/pages/hackthon/Score'
import Login from '@/pages/Login'
import Programs from '@/pages/hackthon/List'
import Index from '@/pages/hackthon/Index'
import Statistics from '@/pages/hackthon/Statistics'
import Submit from '@/pages/hackthon/Submit'
import Score from '@/pages/hackthon/Score'
import Start from '@/pages/Start'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/programs',
    //   name: 'vote-list',
    //   component: VoteList
    // },
    // {
    //   path: '/program/:id',
    //   name: 'vote-program',
    //   component: VoteDetail
    // },
    {
      path: '/vote',
      name: 'vote',
      component: Submit
    },
    // {
    //   path: '/vote',
    //   name: 'vote',
    //   component: Submit
    // },
    {
      path: '/programs',
      name: 'programs',
      component: Programs
    },
    {
      path: '/program/statistics',
      name: 'statistics',
      component: Statistics
    },
    {
      path: '/program/:id',
      name: 'program',
      component: Score
    }
  ]
})
