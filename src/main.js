import '../static/css/comm.less'
import './ui-extend'
import './util/rem'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App: () => import('./App') },
  template: '<App/>'
})
