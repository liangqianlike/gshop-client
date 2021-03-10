import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  // el: '#app',
  // components: {
  //   App
  // },
  // template: '<App/>'
  render: h => h(App),  // 函数返回组件标签<App/>
  router
}).$mount('#app')