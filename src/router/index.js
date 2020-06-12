import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VoteIndex from '@/components/VoteIndex'
import VoteList from '@/components/VoteList'
import VoteDetail from '@/components/VoteDetail'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    {
      path: '/vote',
      name: 'vote',
      component: VoteIndex
    },
    {
      path: '/programs',
      name: 'vote-list',
      component: VoteList
    },
    {
      path: '/program/:id',
      name: 'vote-program',
      component: VoteDetail
    }
  ]
})
