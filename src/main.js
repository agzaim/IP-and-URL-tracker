import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(VueResource);

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


