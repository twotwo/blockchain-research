import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
import List from '@/pages/list/index.vue'
import Person from '@/pages/person/index.vue'
import Help from '@/pages/help/index.vue'
import PersonInfo from '@/pages/person/PersonInfo.vue'
import OrderList from '@/pages/person/orderList.vue'
import Account from '@/pages/person/personAccount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/person',
      name: 'Person',
      component: Person,
      children: [
        {path: 'info', component: PersonInfo},
        {path: 'order', component: OrderList},
        {path: 'account', component: Account}
      ]
    }, {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
