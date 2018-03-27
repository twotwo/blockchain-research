import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index.vue'
import List from '@/pages/list/index.vue'
import Person from '@/pages/person/index.vue'
import Help from '@/pages/help/index.vue'
import PersonInfo from '@/pages/person/PersonInfo.vue'
import OrderList from '@/pages/person/orderList.vue'
import Account from '@/pages/person/personAccount.vue'
import Modify from '@/pages/person/modifyInfo.vue'
import HelpAbout from '@/pages/help/helpAbout.vue'
import HelpAccount from '@/pages/help/helpAccount.vue'
import HelpCenter from '@/pages/help/helpCenter.vue'
import HelpCommon from '@/pages/help/helpCommon.vue'
import HelpNotice from '@/pages/help/helpNotice.vue'
import HelpSafe from '@/pages/help/helpSafe.vue'
import HelpTransaction from '@/pages/help/helpTransaction.vue'

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
        {path: 'account', component: Account},
        {path: 'modify', component: Modify}
      ]
    }, {
      path: '/help',
      name: 'Help',
      component: Help,
      children: [
        {path: 'about', component: HelpAbout},
        {path: 'account', component: HelpAccount},
        {path: 'center', component: HelpCenter},
        {path: 'common', component: HelpCommon},
        {path: 'notice', component: HelpNotice},
        {path: 'safe', component: HelpSafe},
        {path: 'transaction', component: HelpTransaction}
      ]
    }
  ]
})
