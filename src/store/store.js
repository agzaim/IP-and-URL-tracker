import Vue from "vue";
import Vuex from "vuex";
import VueResource from 'vue-resource';
import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDE2QYlTv9497W1CZsYg-_TrToDK3SgLNs'
  }
});

export const store = new Vuex.Store({
       state: {
           userData: {},
           searchedData: {},
           searchList: [],
           visible: true
       },
       mutations: {
           SET_USER_DATA: (state, data) => {
                state.userData = data;
           },
           
           SET_SEARCHED_DATA: (state, data) => {
                state.searchedData = data;
           },
           SWITCH_VISIBILITY: (state) => {
               if(state.visible) {
                   state.visible = false;
               }
           },
           UPDATE_SEARCH_LIST: (state, payload) => {
               state.searchList.push(payload);
           }
       },
       actions: {
           GET_USER_DATA: function ({commit}) {
                Vue.http.get("http://freegeoip.net/json/")
                    .then((response) => {
                       commit('SET_USER_DATA', response.data);
                    }, (err) => {
                    console.log(err);
                })
           },
           
           GET_SEARCHED_DATA: function ({commit}, userInput) {
                Vue.http.get("http://freegeoip.net/json/" + userInput.input)
                    .then((response) => {
                       commit('SET_SEARCHED_DATA', response.data);
                       commit('SWITCH_VISIBILITY');
                       commit('UPDATE_SEARCH_LIST', 
                              {input: userInput.input,
                               country: response.data.country_name});
                    }, (err) => {
                    console.log(err);
                })
           }
       }
})