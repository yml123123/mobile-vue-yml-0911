import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, NavBar, Field, Cell, CellGroup, Toast, Loading, Tabbar, TabbarItem } from 'vant'

import {
  ValidationProvider,
  extend,
  ValidationObserver
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules' // 加载所有的验证规则
import zhCN from 'vee-validate/dist/locale/zh_CN' //

for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhCN.messages[rule] // add its message
  })
}

// 一个原则：有内置的使用内置的，内置的满足不了再自定义
extend('phone', {
  validate (value) {
    return /^1\d{10}$/.test(value)
  },
  message: '必须是手机号'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.config.productionTip = false
Vue.use(Button)
  .use(NavBar)
  .use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Toast)
  .use(Loading)
  .use(Tabbar)
  .use(TabbarItem)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
