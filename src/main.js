import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import { store } from './store/store';
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueResource);
Vue.use(VeeValidate);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDE2QYlTv9497W1CZsYg-_TrToDK3SgLNs'
  }
});


new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})


