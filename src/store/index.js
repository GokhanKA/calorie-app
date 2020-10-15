import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    users: [],
    isLoggedIn: localStorage.getItem('user'),
    calorieLimit: null,
    meals: [],
  },
  getters: {
    user: (state) => state.user,
    isLoggedIn: (state) => state.isLoggedIn,
    
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload.user;
    },
    
    LOGIN: (state) => {
      state.isLoggedIn = true;
    },
    LOGOUT: (state) => {
      state.user = {};
      state.isLoggedIn = false;
      localStorage.removeItem('user');
      
    }

  },
  actions: {

  },
  modules: {
  }
})
